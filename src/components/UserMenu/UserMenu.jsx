import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./UserMenu.css";

function UserMenu() {
  const { currentUser, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  if (!currentUser) return null; 

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="user-menu">
      <div className="user-info" onClick={() => setOpen(!open)}>
        <img
          src={`https://avatars.dicebear.com/api/initials/${currentUser.full_name || "U"}.svg`}
          alt="avatar"
          className="user-avatar"
        />
        <span className="user-name">{currentUser.full_name || "User"}</span>
      </div>

      {open && (
        <div className="user-dropdown">
          <Link to="/my-account" className="user-dropdown-item">
            Profile
          </Link>
          <button onClick={handleLogout} className="user-dropdown-item">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
