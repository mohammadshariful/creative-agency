import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.config";
import Loading from "./Loading";
const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default RequireAuth;
