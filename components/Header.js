import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [btn, setBtn] = useState("Sign In / Sign up");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.icons8.com/?size=512&id=BWZQnKohuZLV&format=png"
        ></img>
      </div>

      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <button
              onClick={function () {
                if (btn == "Sign In / Sign up") setBtn("Logout");
                else setBtn("Sign In / Sign up");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
