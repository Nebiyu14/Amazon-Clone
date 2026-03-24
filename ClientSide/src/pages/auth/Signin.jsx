import React, { useState } from "react";
import "./signin.css";
import useAuth from "../../hooks/useAuth";
import { ClipLoader } from "react-spinners";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout";

function Signin() {
  const protectedRouteMessage = useLocation();
  const { message, redirect } = protectedRouteMessage?.state || {};
  const [authMode, setAuthMode] = useState("signin");

  const {
    login,
    createAccount,
    handleResetPassword,
    error,
    setError,
    isLoading,
  } = useAuth();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSignInCreateAccount = () => {
    setAuthMode((prev) => (prev === "signin" ? "signup" : "signin"));
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userCredentials;

    if (authMode === "signin") {
      login(email, password, redirect);
    } else {
      createAccount(email, password, redirect);
    }
  };

  const handleForgotPassword = () => {
    const emailRequired = prompt("Enter your email to reset password");
    if (!emailRequired) return toast.info("Email is required!");
    handleResetPassword(emailRequired);
  };

  const handleInput = (e) => {
    setError(null);
    setUserCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <div className="account__page__container">
        <Link to="/" className="account__page__logo">
          <span className="account__page__logo__click">Click</span>
          <span className="account__page__logo__cart">Cart</span>
        </Link>

        <div className="account__page__card">
          <h2 className="account__page__title">
            {authMode === "signin" ? "Sign In" : "Create Account"}
          </h2>

          {message && <p className="account__page__message">{message}</p>}

          <form onSubmit={handleSubmit}>
            <div className="account__page__error">{error}</div>

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userCredentials.email}
              onChange={handleInput}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={userCredentials.password}
              onChange={handleInput}
            />

            <p className="account__page__forgot" onClick={handleForgotPassword}>
              Forgot password?
            </p>

            <p className="account__page__terms">
              By continuing, you agree to ClickCart’s <span>Terms</span> and{" "}
              <span>Privacy Policy</span>.
            </p>

            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <ClipLoader color="#ffffff" size={16} />
              ) : authMode === "signin" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </button>
          </form>


          <div className="account__page__switch">
            {authMode === "signin" ? (
              <p>
                New to ClickCart?{" "}
                <span onClick={handleSignInCreateAccount}>
                  Create an account
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={handleSignInCreateAccount}>Sign in</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signin;
