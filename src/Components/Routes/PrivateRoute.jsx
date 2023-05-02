import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user , loading);

  if (loading) {
    return (
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
