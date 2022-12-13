import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { signup } from "../../../api/auth";

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

    dataObject.first_name = formData.get("first_name");
    dataObject.last_name = formData.get("last_name");
    dataObject.date_of_birth = formData.get("date_of_birth");
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
        <input type="text" placeholder="First Name" name="first_name" />
        <input type="text" placeholder="Last Name" name="last_name" />
        <input type="date" placeholder="Date of Birth" name="date_of_birth" />
        <input type="text" placeholder="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
}

export default function SignupModal({ open, onClose }) {
  const [documentLoaded, setDocumentLoaded] = useState(false);

  const onSubmit = async (data) => {
    const { email, password, first_name, last_name, date_of_birth } = data;
    const response = await signup({
      email,
      password,
      first_name,
      last_name,
      date_of_birth,
    });

    if(response.error){
      alert(response.error);
    }
    else{
      alert("Account created successfully");
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
