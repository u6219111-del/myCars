import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../api/supabaseClient';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return user;
  }

  async function login(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return user;
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  useEffect(() => {
    const unsubscribe = supabase.auth.onAuthStateChange((_event, session) => {
      setCurrentUser(session?.user || null);
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