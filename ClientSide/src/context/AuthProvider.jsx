//Authentication logic only here

import { useEffect, useState, createContext } from "react";
import { auth, logout, signin, signup } from "../utility/authFunctions";
import { onAuthStateChanged } from "firebase/auth";
import useLoading from "../hooks/useLoading";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    const unsubscribe = onAuthStateChanged(auth, (getCurrentUser) => {
      setUser(getCurrentUser);
      stopLoading();
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
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
