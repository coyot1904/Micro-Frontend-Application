import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import { jwtDecode } from "jwt-decode";

import "./styles.css";

const AuthApp = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const user = token ? jwtDecode(token) : null;
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {token ? (
        <div>
          <h2>
            Welcome, {user.email} go to <a href="/products">Product Page</a>
          </h2>
          <Logout onLogout={handleLogout} />
        </div>
      ) : isLogin ? (
        <div>
          <h2>Login</h2>
          <Login onLogin={handleLogin} />
          <p>
            Need an account? <button onClick={toggleForm}>Register here</button>
          </p>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <Register />
          <p>
            Already have an account?{" "}
            <button onClick={toggleForm}>Login here</button>
          </p>
        </div>
      )}
      {}
    </div>
  );
};

export default AuthApp;
