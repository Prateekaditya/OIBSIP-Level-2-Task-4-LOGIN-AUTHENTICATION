import React from "react";
import Form from "../../components/sign up/Form";

import "./signUp.css";

import image from "../../assests/LoginArt.png";
import NavBar from "../../components/nav bar/NavBar";

export default function SignUp() {
  return (
    <div className="signUpPage">
      <NavBar />
      
      <div className="signUpDivs">
        <Form />
      </div>
    </div>
  );
}
