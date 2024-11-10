import React, { useState } from "react";
import assets from "../assets/assets";
import "./Register.css";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = ({ setAuthPAge }) => {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // Error states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    console.log(passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Validation functions
  const validateName = (name) => {
    const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
    if (!name.trim()) return "Name is required.";
    if (name.length < 2 || name.length > 30)
      return "Name must be between 2 and 30 characters.";
    if (!namePattern.test(name))
      return "Name can only contain letters and spaces.";
    return "";
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format regex
    if (!email.trim()) return "Email is required.";
    if (!emailPattern.test(email)) return "Invalid email format.";
    return "";
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) return "Password is required.";
    if (!passwordPattern.test(password))
      return "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error states
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    const confirmPasswordValidation =
      password !== confirmPassword ? "Passwords do not match." : "";

    // Update error states based on validation
    if (nameValidation) {
      setNameError(nameValidation);
      toast.error(nameValidation); // Show error toast
    }
    if (emailValidation) {
      setEmailError(emailValidation);
      toast.error(emailValidation); // Show error toast
    }
    if (passwordValidation) {
      setPasswordError(passwordValidation);
      toast.error(passwordValidation); // Show error toast
    }
    if (confirmPasswordValidation) {
      setConfirmPasswordError(confirmPasswordValidation);
      toast.error(confirmPasswordValidation); // Show error toast
    }

    // If there are any errors, return early
    if (
      nameValidation ||
      emailValidation ||
      passwordValidation ||
      confirmPasswordValidation
    ) {
      return; // Exit the function if there are validation errors
    }

    if (
      nameValidation ||
      emailValidation ||
      passwordValidation ||
      confirmPasswordValidation
    ) {
      return;
    }

    try {
      await signup(name, email, password);
      toast.success("Registration successful!");
      setAuthPAge("login");
    } catch (err) {
      setError("Registration failed. Please try again.");
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <div className="header-container">
        <h1>Register</h1>
      </div>
      <form className="input-container" onSubmit={handleSubmit} noValidate>
        <div>
          <img src={assets.profileIcon} alt="" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
            required
          />
        </div>
        <div className="error-container">{nameError && <p>{nameError}</p>}</div>
        <div>
          <img src={assets.emailIcon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            required
          />
        </div>
        <div className="error-container">
          {emailError && <p>{emailError}</p>}
        </div>
        <div>
          <img src={assets.passwordIcon} alt="" />
          <input
            type={!passwordVisible ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            required
          />
          <img
            src={!passwordVisible ? assets.closeEye : assets.openEye}
            alt=""
            onClick={togglePasswordVisibility}
          />
        </div>
        <div
          className="error-container"
          style={{ height: passwordError.length > 65 ? "44.36px" : "22.18px" }}
        >
          {passwordError && (
            <p
              style={{ height: passwordError.length > 65 ? "44.36px" : "auto" }}
            >
              {passwordError.length > 65 ? (
                <>
                  {passwordError.slice(0, 59)}
                  <br />
                  {passwordError.slice(65)}
                </>
              ) : (
                passwordError
              )}
            </p>
          )}
        </div>
        <div>
          <img src={assets.passwordIcon} alt="" />
          <input
            type={!confirmPasswordVisible ? "password" : "text"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError("");
            }}
            required
          />
          <img
            src={!confirmPasswordVisible ? assets.closeEye : assets.openEye}
            alt=""
            onClick={toggleConfirmPasswordVisibility}
          />
        </div>
        <div className="error-container">
          {confirmPasswordError && <p>{confirmPasswordError}</p>}
        </div>
      </form>
      <div className="btn-container">
        <button onClick={handleSubmit}>Register</button>
        <p>Have an account ?</p>
        <button onClick={() => setAuthPAge("login")}>Login</button>
      </div>
      <ToastContainer />
    </>
  );
};
