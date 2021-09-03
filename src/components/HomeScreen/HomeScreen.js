import React from "react";
import Button from "../UI/Buttons/Button";
import "./HomeScreen.css";

export default function HomeScreen() {
  return (
    <div className="home">
      <div className="home-container">
        <h3 className="home-title">Medicords</h3>
        <blockquote className="quote">
          {" "}
          <q>- One place to store all your medical records - </q>
        </blockquote>
        <div className="auth-buttons">
          <Button className="signup-auth">Sign UP!</Button>
          <Button className="login-auth">Login</Button>
        </div>
      </div>
    </div>
  );
}
