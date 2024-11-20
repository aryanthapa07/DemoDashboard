import React from "react";
import { NavLink } from "react-router-dom";

const ProgressLine = () => {
  const steps = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Visible Insights", path: "/visible-insights" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "800px",
        margin: "20px auto",
        position: "relative",
      }}
    >
      {/* Line connecting the dots */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          width: "90%",
          height: "2px",
          backgroundColor: "#ccc",
          zIndex: 1,
        }}
      ></div>

      {steps.map((step, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          {/* Clickable Circle */}
          <NavLink
            to={step.path}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: isActive ? "green" : "white",
              border: isActive ? "2px solid green" : "2px solid #ccc",
              transition: "all 0.3s ease",
            })}
          />
          {/* Text */}
          <div
            style={{
              marginTop: "10px",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {step.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressLine;
