import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);

      toast.success("Login successful!", {
        autoClose: -1000,
        closeButton: false,
        onClose: () => {
          navigate("/");
          window.location.reload();
        },
      });

      console.log("Successfully logged in with token:", token);
    } catch (error) {
      console.error("Login failed:", error.message);

      toast.error("Login failed. Please check your credentials.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="Login-container">
      <div className="login-content">
        <span className="Login-Content-text">Login</span>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              className="user-input-email"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              className="user-input-password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <div className="button-class">
            <button className="submit-button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Login;
