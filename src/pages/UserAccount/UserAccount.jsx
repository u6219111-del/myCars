import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import { supabase } from "../../api/supabaseClient";
import { updateUserProfile } from "../../api/users";
import "./UserAccount.css";

function UserAccount() {
  const { currentUser } = useAuth();
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
    full_name: "",
    email: "",
    avatar_url: ""
  });
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({
    full_name: "",
    avatar_url: ""
  });

  useEffect(() => {
    if (currentUser) {
      setUserData({
        full_name: currentUser.full_name || "",
        email: currentUser.email || "",
        avatar_url: currentUser.avatar_url || null
      });
      setEditData({
        full_name: currentUser.full_name || "",
        avatar_url: currentUser.avatar_url || ""
      });
    }
  }, [currentUser]);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    try {
      // Update user profile in Supabase
      const { error } = await updateUserProfile(currentUser.id, {
        full_name: editData.full_name,
        avatar_url: editData.avatar_url 
      });

      if (error) throw error;

      // Update local state
      setUserData({
        ...userData,
        full_name: editData.full_name,
        avatar_url: editData.avatar_url
      });
      
      // Update the auth context user data
      // We'll need to refresh the user data by triggering a re-render
      window.location.reload();
      
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile: ' + error.message);
    }
  };

  if (!currentUser) {
    return (
      <div className="user-account-container">
        <div className="user-account-wrapper">
          <div className="user-account-login-required">
            <h2>{t('please_login_to_view_account')}</h2>
            <p>{t('login_to_access_your_account')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="user-account-container">
      <div className="user-account-wrapper">
        <h1>{t('my_account')}</h1>
        
        <div className="user-account-info">
          <div className="user-avatar-section">
            {userData.avatar_url && (
              <img 
                src={userData.avatar_url} 
                alt={t('user_avatar')} 
                className="user-account-avatar"
              />
            )}
            <h2>{userData.full_name || userData.email}</h2>
          </div>
          
          <div className="user-details">
            <div className="user-detail-item">
              <label>{t('email')}:</label>
              <span>{userData.email}</span>
            </div>
            
            {editing ? (
              <form onSubmit={handleSave} className="edit-profile-form">
                <div className="form-group">
                  <label htmlFor="full_name">{t('full_name')}:</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={editData.full_name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="avatar_url">{t('avatar_url')}:</label>
                  <input
                    type="text"
                    id="avatar_url"
                    name="avatar_url"
                    value={editData.avatar_url}
                    onChange={handleInputChange}
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>
                
                <div className="form-buttons">
                  <button type="submit" className="save-btn">
                    {t('save')}
                  </button>
                  <button type="button" onClick={handleEditToggle} className="cancel-btn">
                    {t('cancel')}
                  </button>
                </div>
              </form>
            ) : (
              <div className="profile-display">
                <div className="user-detail-item">
                  <label>{t('full_name')}:</label>
                  <span>{userData.full_name || t('not_provided')}</span>
                </div>
                
                <div className="user-detail-item">
                  <label>{t('role')}:</label>
                  <span>{currentUser.role || 'User'}</span>
                </div>
                
                <div className="user-detail-item">
                  <label>{t('member_since')}:</label>
                  <span>
                    {currentUser.created_at 
                      ? new Date(currentUser.created_at).toLocaleDateString() 
                      : t('unknown')}
                  </span>
                </div>
                
                <button onClick={handleEditToggle} className="edit-profile-btn">
                  {t('edit_profile')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;