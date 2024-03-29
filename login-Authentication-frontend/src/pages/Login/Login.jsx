import React from "react";
import Form from "../../components/login/Form";

import "./login.css";

export default function Login() {
  return (
    <div className="loginPage">
      <div className="loginDivs">
        <Form />
      </div>
      {/* <div className="loginDivs">
        <img
          src="https://images.unsplash.com/photo-1614121181207-4b6c334d353d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
          alt="space-img"
        />
      </div> */}
    </div>
  );
}
