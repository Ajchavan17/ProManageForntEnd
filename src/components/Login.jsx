import React, { useState } from "react";
import assets from "../assets/assets";
import "./Register.css";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Login = ({ setAuthPAge }) => {
  const { navigate } = useNavigate();
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  //error state
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    console.log(passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error states before validation
    setErrorEmail("");
    setErrorPassword("");

    // Initialize an error flag
    let hasError = false;

    // Validate email
    if (!email.trim()) {
      setErrorEmail("Email is required.");
      toast.error("Email is required.");
      hasError = true; // Set error flag
    }

    // Validate password
    if (!password.trim()) {
      setErrorPassword("Password is required.");
      toast.error("Password is required.");
      hasError = true; // Set error flag
    }

    // If there are any errors, exit the function
    if (hasError) {
      return;
    }

    try {
      await signin(email, password);
      toast.success("Login successful!");
      navigate("/dashboard");
      setErrorEmail("");
      setErrorPassword("");
    } catch (error) {
      setErrorEmail("Invalid email or password.");
      setErrorPassword("Invalid email or password.");
      toast.error("Invalid email or password.");
    }
  };

  return (
    <>
      <div className="header-container">
        <h1>Login</h1>
      </div>
      <form className="input-container" onSubmit={handleSubmit} noValidate>
        <div>
          <img src={assets.emailIcon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail("");
            }}
            required
          />
        </div>
        <div className="error-container">
          {errorEmail && <p className="error-text">{errorEmail}</p>}
        </div>
        <div>
          <img src={assets.passwordIcon} alt="" />
          <input
            type={!passwordVisible ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorPassword("");
            }}
            required
          />
          <img
            src={!passwordVisible ? assets.closeEye : assets.openEye}
            alt=""
            onClick={togglePasswordVisibility}
          />
        </div>
        <div className="error-container">
          {errorPassword && <p className="error-text">{errorPassword}</p>}
        </div>
      </form>
      <div className="btn-container">
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <p>Have an account ?</p>
        <button onClick={() => setAuthPAge("register")}>Register</button>
      </div>
      <ToastContainer />
    </>
  );
};
