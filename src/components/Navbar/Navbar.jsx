import React, { useEffect, useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import SignupModal from "../SignupModal/Signup";
import "./Navbar.css";

export default function Navbar() {
  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  });

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
        {loggedIn && (
          <>
            <a href="#">Favorites</a>
            <a href="#">Profile</a>
          </>
        )}
        {!loggedIn && (
          <>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => setLoginModal(true)}
            >
              Login
            </a>
            <button
              onClick={() => setSignupModal(true)}
              className="signup-button"
            >
              New Account
            </button>
          </>
        )}
      </nav>
      <SignupModal open={signupModal} onClose={() => setSignupModal(false)} />
      <LoginModal open={loginModal} onClose={() => setLoginModal(false)} />
    </>
  );
}
