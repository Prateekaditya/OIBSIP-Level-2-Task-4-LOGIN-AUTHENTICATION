import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import image from "../../assests/nav-img.png";

import "./navBar.css";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const redirect = useNavigate();
  return (
    <div className="navBar">
      <div className="headingmain">
      <h1 className="heading">LOGIN APP</h1>
      </div>
      <div className="navButtons">
        <button
          className="homeButton"
          onClick={() => {
            redirect("/");
          }}
        >
          Home
        </button>
        {isLoggedIn ? (
          <button
            className="loginButton"
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.setItem("isLoggedIn", false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="loginButton"
            onClick={() => {
              redirect("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
