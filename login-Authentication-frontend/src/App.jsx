import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
