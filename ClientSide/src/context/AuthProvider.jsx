//Authentication logic only here

import { useEffect, useState, createContext } from "react";
import {
  auth,
  logout,
  signin,
  signup,
  resetPassword,
} from "../utility/authFunctions";
import { onAuthStateChanged } from "firebase/auth";
import useLoading from "../hooks/useLoading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, startLoading, stopLoading } = useLoading();
  //to prevent flash of 'sign in' for already logged in user when refreshing the page:
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (getCurrentUser) => {
      setUser(getCurrentUser);
      setAuthLoading(false);
      console.log(getCurrentUser);
    });

    return () => unsubscribe();
  }, []);

  //signin
  const login = async (email, password) => {
    startLoading();
    setError(null);

    //check both email and password
    if (!email || !password) {
      setError("Both email and password are required.");
      stopLoading();
      return;
    }

    try {
      await signin(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      stopLoading();
    }
  };

  //signup
  const createAccount = async (email, password) => {
    startLoading();
    setError(null);

    //check both email and password
    if (!email || !password) {
      setError("Both email and password are required.");
      stopLoading();
      return;
    }

    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      stopLoading();
    }
  };

  //signout
  const signout = async () => {
    startLoading();
    setError(null);
    try {
      await logout();
    } catch (error) {
      setError(error.message);
    } finally {
      stopLoading();
    }
  };

  //password reset
  const handleResetPassword = async (email) => {
    try {
      await resetPassword(email);
      toast.info("Password reset link sent. Check your email INBOX or SPAM.");
    } catch (error) {
      alert(error.message);
    }
  };

  const values = {
    user,
    setUser,
    isLoading,
    startLoading,
    stopLoading,
    error,
    setError,
    login,
    createAccount,
    signout,
    handleResetPassword,
  };

  return (
    <AuthContext.Provider value={values}>
      {!authLoading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
