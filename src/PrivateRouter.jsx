import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function PrivateRoute({ children, requireAdmin = false }) {
  const { user, loading } = useAuth();

  if (loading) {
    return null; 
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin && user.role !== "admin" && !user.hasAdminAccess) {
    return <Navigate to="/admin-login" />;
  }

  return children;
}
