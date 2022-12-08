import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

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

export default function Signup({ open, onClose }) {
  const [documentLoaded, setDocumentLoaded] = useState(false);

  useEffect(() => {
    setDocumentLoaded(true);
  }, []);

  if (!open || !documentLoaded) return <></>;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div style={{ height: "100px", width: "100px" }}>hello modal</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
