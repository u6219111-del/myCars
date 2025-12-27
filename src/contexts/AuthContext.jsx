import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../api/supabaseClient';
import { createUserProfile, getUserProfile } from '../api/users';


const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const createProfileWithAvatar = async (userId, email, fullName, user) => {
    let avatarUrl = null;
    
    // Проверяем Google аватарку из user_metadata
    if (user?.user_metadata) {
      avatarUrl = user.user_metadata.avatar_url || user.user_metadata.picture || null;
    }
    
    // Если Google аватарки нет, не устанавливаем аватарку (null)
    // Не используем gravatar по требованию пользователя

    return await createUserProfile(userId, email, fullName, avatarUrl);
  };

  async function signup(email, password) {
    console.log('Signing up user:', email);
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error('Auth error:', error);
      throw error;
    }
    
  
    if (user) {
      console.log('User created, creating profile for:', user.id);
      const fullName = user.user_metadata?.full_name || user.user_metadata?.name || user.email.split('@')[0];
      const { error: profileError } = await createProfileWithAvatar(
        user.id,
        user.email,
        fullName,
        user
      );
      
      if (profileError) {
        console.error('Error creating user profile:', profileError);
      }
    }
    
    console.log('Signup completed, user:', user);
    return user;
  }

  async function login(email, password) {
    console.log('Logging in user:', email);
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Login error:', error);
      throw error;
    }
    
    if (user) {
      console.log('User logged in, fetching profile for:', user.id);
      const { data: profile, error: profileError } = await getUserProfile(user.id);
      
      if (!profileError && profile) {
        return {
          ...user,
          avatar_url: profile.avatar_url,
          full_name: profile.full_name,
          role: profile.role
        };
      }
    }
    
    return user;
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  useEffect(() => {
    const fetchUserWithProfile = async (user) => {
      console.log('Fetching user profile with full data for:', user?.id);
      if (user && user.id) {
        const { data: profile, error } = await getUserProfile(user.id);

        if (error) {
          console.log('Profile not found, creating new one for:', user.id);
          const fullName = user.user_metadata?.full_name || user.user_metadata?.name || user.email.split('@')[0];
          const { error: insertError } = await createProfileWithAvatar(
            user.id,
            user.email,
            fullName,
            user
          );

          if (!insertError) {
            const { data: newProfile } = await getUserProfile(user.id);
            if (newProfile) {
              setCurrentUser({
                ...user,
                avatar_url: newProfile.avatar_url,
                full_name: newProfile.full_name,
                role: newProfile.role
              });
            } else {
              setCurrentUser(user);
            }
          } else {
            console.error('Failed to create profile:', insertError);
            setCurrentUser(user);
          }
        } else {
          setCurrentUser({
            ...user,
            avatar_url: profile.avatar_url,
            full_name: profile.full_name,
            role: profile.role
          });
        }
      } else {
        setCurrentUser(user || null);
      }
    };

    const unsubscribe = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('Auth state changed, session user:', session?.user?.id);
      if (session?.user) {
        await fetchUserWithProfile(session.user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe.data.subscription.unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
