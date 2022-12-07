import React from "react";
import banner from "./banner.png";
import searchIcon from "./search-icon.svg";

export default function SearchIsland() {
  return (
    <div style={{ position: "relative", height: '300px' }}>
      <img
        src={banner}
        style={{
          height: "300px",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          left: "35%",
          top: "130px",
          width: "30%",
        }}
      >
        <input
          style={{
            display: "block",
            margin: "auto",
            width: "90%",
            border: "none",
            borderRadius: "3px 0 0 3px",
            outline: "none",
            height: "30px",
            backgroundColor: "white",
          }}
        />
        <button
          style={{
            width: "10%",
            minWidth: "35px",
            height: "32px",
            margin: "0",
            cursor: "pointer",
            border: "none",
            backgroundColor: "white",
            borderRadius: "0 3px 3px 0",
          }}
        >
          <img src={searchIcon} style={{ height: "15px" }} />
        </button>
      </div>
    </div>
  );
}
