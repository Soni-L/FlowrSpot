import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { login } from "../../api/auth";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

function SignupForm({ onSubmit }) {
  const getData = (form) => {
    let formData = new FormData(form);
    let dataObject = {};

    dataObject.email = formData.get("email");
    dataObject.password = formData.get("password");
    onSubmit(dataObject);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(e.target);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Account</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input type="text" placeholder="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default function LoginModal({ open, onClose }) {
  const [documentLoaded, setDocumentLoaded] = useState(false);

  const onSubmit = async (data) => {
    const { email, password } = data;
    const response = await login({
      email,
      password,
    });

    if (response.error) {
      alert(response.error);
    } else {
      localStorage.setItem("token", JSON.stringify(response.auth_token));
      onClose();
    }
  };

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  if (!open || !documentLoaded) return <></>;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div>
          <SignupForm onSubmit={onSubmit} />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
