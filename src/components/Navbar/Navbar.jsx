import React, { useState } from "react";
import SignupModal from "../SignupModal/Signup";
import "./Navbar.css";

export default function Navbar() {
  const [signupModal, setSignupModal] = useState(false);
  return (
    <>
      <nav className="navbar-container">
        <div style={{ flexGrow: 1, display: "flex", gap: "4px" }}>
          <img src="/logo.svg" />
          <a
            href="#"
            style={{ fontWeight: 700, fontSize: "20px", color: "#EAA79E" }}
          >
            FlowrSpot
          </a>
        </div>

        <a href="#">Flowers</a>
        <a href="#">Latest Sightings</a>
        <a href="#">Favorites</a>
        <a>Login</a>
        <button onClick={() => setSignupModal(true)} className="signup-button">
          New Account
        </button>
      </nav>
      <SignupModal open={signupModal} onClose={() => setSignupModal(false)} />
    </>
  );
}
