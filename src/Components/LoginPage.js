import React, { useState } from "react";
import "./LoginPage.css";
import JokesPage from "./JokesPage";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform dummy login validation here
    if (username === "MobileFirst" && password === "MobileFirstApp") {
      setShowError(false);
      setisLoggedIn(true)
      // Redirect to the homepage or perform any other actions
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="col-md-6">
        {isLoggedIn ? (
          <JokesPage />
        ) : (
          <div className="container">
            <form className="login-form" onSubmit={handleSubmit} >
              <h3>Login</h3>
              {showError && (
                <p className="error">Invalid username or password</p>
              )}
              <div className="form-group" autoComplete="off">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
