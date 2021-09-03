import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="nav-container">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        {" "}
        <div className="nav-title">
          <h2>Medicords</h2>
        </div>
      </Link>
      <ul className="links-container">
        <li className="link">About us</li>
        <li className="link">Contact us</li>
      </ul>
    </div>
  );
}
