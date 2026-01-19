const DB_URL = "/api"; // vite proxy -> json-server

// ---------------- USERS ----------------
export const registerUser = async (userData) => {
  try {
    // check existing email
    const existingRes = await fetch(
      `${DB_URL}/users?email=${encodeURIComponent(userData.email)}`
    );
    
    if (!existingRes.ok) {
      throw new Error(`HTTP error! status: ${existingRes.status}`);
    }
    
    const existingUsersText = await existingRes.text();
    const existingUsers = existingUsersText ? JSON.parse(existingUsersText) : [];

    if (existingUsers.length > 0) {
      throw new Error("User with this email already exists");
    }

    // create user
    const userRes = await fetch(`${DB_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...userData,
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        role: "user",
      }),
    });

    if (!userRes.ok) {
      const errorText = await userRes.text();
      throw new Error(`Failed to register user: ${userRes.status} - ${errorText}`);
    }

    const newUserText = await userRes.text();
    const newUser = newUserText ? JSON.parse(newUserText) : null;

    // create profile
    const profileRes = await fetch(`${DB_URL}/profiles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: newUser.id,
        username: userData.username || newUser.email.split("@")[0],
        avatar_url: "",
        created_at: new Date().toISOString(),
      }),
    });

    if (!profileRes.ok) {
      const profileErrorText = await profileRes.text();
      console.error('Profile creation error:', profileErrorText);
      // Don't throw here to avoid blocking registration
    }

    return newUser;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await fetch(
      `${DB_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    );
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const responseText = await res.text();
    const data = responseText ? JSON.parse(responseText) : [];
    
    if (!data.length) {
      throw new Error("Invalid email or password");
    }

    return data[0];
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const res = await fetch(`${DB_URL}/users`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const responseText = await res.text();
    return responseText ? JSON.parse(responseText) : [];
  } catch (error) {
    console.error('Fetch users error:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await fetch(`${DB_URL}/users/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to delete user: ${res.status} - ${errorText}`);
    }

    return true;
  } catch (error) {
    console.error('Delete user error:', error);
    throw error;
  }
};

// ---------------- PROFILES ----------------
export const getProfile = async (id) => {
  try {
    const res = await fetch(`${DB_URL}/profiles?id=${encodeURIComponent(id)}`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const responseText = await res.text();
    const data = responseText ? JSON.parse(responseText) : [];
    
    if (!data.length) throw new Error("Profile not found");

    return data[0];
  } catch (error) {
    console.error('Profile fetch error:', error);
    throw error;
  }
};

export const updateProfile = async (id, data) => {
  try {
    const res = await fetch(`${DB_URL}/profiles/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || `Failed to update profile: ${res.status}`);
    }

    const responseText = await res.text();
    return responseText ? JSON.parse(responseText) : null;
  } catch (error) {
    console.error('Update profile error:', error);
    throw error;
  }
};
