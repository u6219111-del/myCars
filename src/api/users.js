import { supabase } from './supabaseClient';

// Get user profile
export const getUserProfile = async (userId) => {
  console.log('Fetching user profile for:', userId);
  
  const { data, error } = await supabase
    .from('Profiles')
    .select('id, email, full_name, avatar_url, role, created_at')
    .eq('id', userId)
    .single();
  
  if (error) {
    console.error('Error fetching user profile:', error);
    return { data: null, error };
  }
  
  console.log('User profile fetched successfully:', data);
  return { data, error: null };
};

// Create user profile
export const createUserProfile = async (userId, email, fullName, avatarUrl) => {
  const { data:Profile, error } = await supabase
    .from('Profiles')
    .insert([{ 
      id: userId, 
      email, 
      full_name: fullName, 
      avatar_url: avatarUrl, 
      role: 'user' 
    }]);
  return { data: Profile, error };
};


// Update user profile
export const updateUserProfile = async (userId, updates) => {
  const { data, error } = await supabase
    .from('Profiles')
    .update(updates)
    .eq('id', userId);
  
  if (error) {
    console.error('Error updating user profile:', error);
    return { data: null, error };
  }
  
  return { data, error: null };
};

// Get all users (for admin panel)
export const getAllUsers = async () => {
  const { data: users, error } = await supabase
    .from('Profiles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching users:', error);
    return [];
  }

  return users;
};


// Delete user
export const deleteUser = async (userId) => {
  const { error } = await supabase
    .from('Profiles')
    .delete()
    .eq('id', userId);
  
  if (error) {
    console.error('Error deleting user:', error);
    return { error };
  }
  
  return { error: null };
};


export const updateUserRole = async (userId, role) => {
  const { data, error } = await supabase
    .from('Profiles')
    .update({ role })
    .eq('id', userId);
  
  if (error) {
    console.error('Error updating user role:', error);
    return { data: null, error };
  }
  
  return { data, error: null };
};