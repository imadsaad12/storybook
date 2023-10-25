// src/Button.js
import React from "react";
import "./Button.css";

const Button = ({ label ,backgroundColor}) => {
  return <button className="custom-button" style={{backgroundColor}}>{label}</button>;
};

export default Button;
