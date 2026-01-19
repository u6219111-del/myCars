import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN_CONFIG } from "../../config/adminConfig";
import "./AdminLogin.css";

function AdminLogin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check if user is logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  // Check if user already has admin access
  React.useEffect(() => {
    if (user && user.hasAdminAccess) {
      console.log("User already has admin access, redirecting to admin panel");
      navigate("/admin", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Use the configured admin password
      console.log("Entered password:", adminPassword);
      console.log("Expected password:", ADMIN_CONFIG.ADMIN_PASSWORD);
      
      if (adminPassword === ADMIN_CONFIG.ADMIN_PASSWORD) {
        console.log("Password correct, granting admin access");
        
        // Grant admin access by updating user object
        const userWithAdminAccess = {
          ...user,
          hasAdminAccess: true
        };
        
        // Update localStorage
        localStorage.setItem("user", JSON.stringify(userWithAdminAccess));
        
        // Dispatch custom event to notify AuthContext
        window.dispatchEvent(new Event("user-update"));
        
        // Small delay to ensure everything is updated
        setTimeout(() => {
          console.log("Navigating to admin panel");
          navigate("/admin", { replace: true });
        }, 200);
      } else {
        setError("Incorrect admin password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h2>Admin Access Required</h2>
          <p>Please enter the admin password to access the admin panel</p>
        </div>
        
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="adminPassword">Admin Password</label>
            <input
              type="password"
              id="adminPassword"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              disabled={loading}
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="admin-login-button"
            disabled={loading || !adminPassword.trim()}
          >
            {loading ? "Verifying..." : "Access Admin Panel"}
          </button>
        </form>
        
        <div className="admin-login-footer">
          <button 
            onClick={() => navigate("/")}
            className="back-to-home"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;