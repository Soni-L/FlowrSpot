import React, { useState, useEffect } from "react";

const FlowerCard = ({ flower }) => {
  return (
    <div
      style={{
        height: "350px",
        width: "250px",
        position: "relative",
        margin: "0",
        padding: "0",
      }}
    >
      <h4
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, 0)",
          textAlign: "center",
          textShadow: "1px 1px black",
          color: "white",
        }}
      >
        {flower.name}
      </h4>
      <img
        src={flower.profile_picture}
        style={{
          height: "350px",
          width: "250px",
          objectFit: "cover",
          margin: "0",
          padding: "0",
        }}
      />
    </div>
  );
};

export default function Flowers({ initialFlowers }) {
  const [flowers, setFlowers] = useState(initialFlowers);
  
  // useEffect(() => {
  //   fetch("https://flowrspot-api.herokuapp.com/api/v1/flowers?page=0")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFlowers(data?.flowers);
  //     });
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "10px",
        justifyContent: "space-between",
      }}
    >
      {flowers.map((flower) => (
        <FlowerCard key={flower.id} flower={flower} />
      ))}
    </div>
  );
}
