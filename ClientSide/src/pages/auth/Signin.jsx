import React, { useState } from "react";
import "./signin.css";
import amazon_logo from "../../assets/Images/logo_amazon_black.png";
import useAuth from "../../hooks/useAuth";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

function Signin() {
  const [authMode, setAuthMode] = useState("signin");
  const { login, createAccount, error, setError, isLoading } = useAuth();
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

    //signin
    if (authMode === "signin") {
      login(email, password);
    }

    //signup
    if (authMode === "signup") {
      createAccount(email, password);
    }
  };

  const handleInput = (e) => {
    setError(null);
    setUserCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="account__page__container">
        <div className="account__page__logo">
          <Link to={"/"}>
            <img src={amazon_logo} alt="" />
          </Link>
        </div>

        <div className="account__page__card">
          <div className="account__page__title">
            <h2>Sign In or Create Account</h2>
          </div>
          <div className="account__page__form_sect">
            <form action="" onSubmit={handleSubmit}>
              <div className="account__page__inputs">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={userCredentials.email}
                  name="email"
                  onChange={(e) => handleInput(e)}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter the password"
                  name="password"
                  value={userCredentials.password}
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="account__page__error">{error}</div>
              <div className="account__page__terms_condition">
                <p>
                  By continuing, you agree to Amazon's clone
                  <span>Condition's of Use</span> and
                  <span> Privacy Notice</span>.
                </p>
              </div>
              <div className="account__page__btn">
                <button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <ClipLoader
                      color="#050505ff"
                      size={16}
                      speedMultiplier={1}
                    />
                  ) : authMode === "signin" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
          </div>
          <hr />
          <div className="account__page__user__states">
            {authMode === "signin" ? (
              <p>
                New to Amazon?{" "}
                <span onClick={handleSignInCreateAccount}>
                  {" "}
                  Create an account
                </span>
              </p>
            ) : (
              <p>
                Have an account already?{" "}
                <span onClick={handleSignInCreateAccount}> Sign in</span>
              </p>
            )}
            <div className="account__page__need__help">
              <p title="You can create and login with any fake email looking ID.">
                Need Help?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
