import React, { useEffect, useState, useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";

function ProtectedRoutes({ children, message, redirect }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin", { state: { message, redirect } });
    }
  }, [user, navigate]);

  if (!user) {
    return <Loading message="Redirecting to sign in page..." />;
  }

  return children;
}

export default ProtectedRoutes;
