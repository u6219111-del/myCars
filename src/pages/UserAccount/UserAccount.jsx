import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { getProfile, updateProfile } from "../../api/mockUsers";
import "./UserAccount.css";
export default function UserAccount() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);


  useEffect(() => {
    if (!user?.id) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);
      try {
        const data = await getProfile(user.id);
        setProfile(data);
      } catch (err) {
        console.error("Failed to load profile:", err);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  if (!user) return <p>Пожалуйста, войдите в систему, чтобы просмотреть профиль.</p>;
  if (loading) return <p>Загрузка профиля...</p>;

  const handleUpdate = async () => {
    if (!profile) return;
    setUpdating(true);
    try {
      const updated = await updateProfile(user.id, {
        username: profile.username,
        avatar_url: profile.avatar_url,
      });
      setProfile(updated);
      alert("Профиль обновлён!");
    } catch (err) {
      alert("Ошибка при обновлении профиля: " + err.message);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="user-account-container">
      <div className="profile-card">
        <h2>Мой профиль</h2>
        <div className="profile-info">
          <div className="avatar-section">
            <div className="avatar-wrapper">
              {profile?.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt="avatar"
                  className="avatar-img"
                />
              ) : (
                <div className="avatar-placeholder">
                  {profile?.username?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
            </div>
          </div>
          
          <div className="profile-details">
            <div className="profile-field">
              <label>Имя пользователя:</label>
              <input
                type="text"
                value={profile?.username || ""}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
                className="profile-input"
              />
            </div>
            
            <div className="profile-field">
              <label>Email:</label>
              <input
                type="text"
                className="profile-input profile-input-disabled"
              />
            </div>
            
            <div className="profile-field">
              <label>Аватар URL:</label>
              <input
                type="text"
                value={profile?.avatar_url || ""}
                onChange={(e) =>
                  setProfile({ ...profile, avatar_url: e.target.value })
                }
                className="profile-input"
              />
            </div>
            
            <button 
              onClick={handleUpdate} 
              disabled={updating}
              className="update-btn"
            >
              {updating ? "Сохраняем..." : "Сохранить изменения"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
