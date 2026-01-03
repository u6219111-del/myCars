const DB_URL = "/api"; // прокси Vite к json-server

// ---------------- USERS ----------------
export const registerUser = async (userData) => {
  // Проверяем, есть ли пользователь с таким email
  const existingRes = await fetch(`${DB_URL}/users?email=${encodeURIComponent(userData.email)}`);
  const existingUsers = await existingRes.json();
  if (existingUsers.length > 0) throw new Error("User with this email already exists");

  // Создаем нового пользователя
  const userRes = await fetch(`${DB_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...userData,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      role: "user", // по умолчанию роль user
    }),
  });
  if (!userRes.ok) throw new Error("Failed to register user");
  const newUser = await userRes.json();

  // Создаем профиль
  const profileRes = await fetch(`${DB_URL}/profiles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: newUser.id,
      username: userData.username || newUser.email.split("@")[0],
      avatar_url: "", // по желанию можно добавить URL аватара
      created_at: new Date().toISOString(),
    }),
  });
  if (!profileRes.ok) throw new Error("Failed to create profile");

  return newUser;
};

export const loginUser = async (email, password) => {
  const res = await fetch(`${DB_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
  const data = await res.json();
  if (!data.length) throw new Error("Invalid credentials");
  return data[0];
};

export const fetchUsers = async () => {
  const res = await fetch(`${DB_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${DB_URL}/users/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete user");
  return res.json();
};

// ---------------- PROFILES ----------------
export const getProfile = async (id) => {
  const res = await fetch(`${DB_URL}/profiles?id=${encodeURIComponent(id)}`);
  if (!res.ok) throw new Error("Failed to fetch profile");
  const data = await res.json();
  if (!Array.isArray(data) || !data.length) throw new Error("Profile not found");
  return data[0];
};

export const updateProfile = async (id, data) => {
  // First, get the current profile to ensure it exists
  const getRes = await fetch(`${DB_URL}/profiles?id=${encodeURIComponent(id)}`);
  const getResData = await getRes.json();
  
  if (!getResData.length) {
    throw new Error("Profile not found");
  }
  
  // Update the profile using PUT method with the correct URL format
  const res = await fetch(`${DB_URL}/profiles/${id}`, {
    method: "PUT", // Using PUT instead of PATCH for more reliable updates
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to update profile: ${res.status} - ${errorText}`);
  }
  
  return res.json();
};
