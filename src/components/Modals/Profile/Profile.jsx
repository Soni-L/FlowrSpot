import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { myProfile } from "../../../api/profile";

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

export default function ProfileModal({ open, onClose }) {
  const [documentLoaded, setDocumentLoaded] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  useEffect(() => {
    open && myProfile().then((res) => setProfile({ ...res }));
  }, [open]);

  if (!open || !documentLoaded) return <></>;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <label htmlFor="first_name" style={{ fontSize: "0.8rem" }}>
            First Name
          </label>
          <input
            disabled
            type="text"
            id="first_name"
            value={profile?.user?.first_name}
          />
          <label htmlFor="last_name" style={{ fontSize: "0.8rem" }}>
            Last Name
          </label>
          <input
            disabled
            type="text"
            id="last_name"
            value={profile?.user?.last_name}
          />
          <button
            style={{
              backgroundColor: "#EAA79E",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
