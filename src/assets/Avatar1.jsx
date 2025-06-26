import React from "react";
import avatar from "./avatar.png"; // local image import

export default function Avatar1() {
  return (
    <svg
      width="360"
      height="360"
      viewBox="0 0 373 373"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="avatar"
    >
      {/* Circular border */}
      <circle
        cx="186.5"
        cy="186.5"
        r="184"
        strokeWidth="5"
      />

      {/* Image inside the circle */}
      <image
        href={avatar}
        x="5"
        y="5"
        width="363"
        height="363"
        clipPath="circle(50% at 50% 50%)"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
}
