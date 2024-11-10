import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import assets from "../assets/assets";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Authentication = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [authPage, setAuthPAge] = useState(() => {
    return localStorage.getItem("authPage") || "login";
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      // Only update localStorage and navigate if not authenticated
      localStorage.setItem("authPage", authPage);
    }
  }, [isAuthenticated, authPage, navigate]);

  return (
    <div className="login-page-container">
      <div className="graphics-contaienr">
        <img src={assets.astronautBackground} alt="background" />
      </div>
      <div className="form-contaienr">
        {authPage === "login" ? (
          <Login setAuthPAge={setAuthPAge} />
        ) : (
          <Register setAuthPAge={setAuthPAge} />
        )}
      </div>
    </div>
  );
};

export default Authentication;
