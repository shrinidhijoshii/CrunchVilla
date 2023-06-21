import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";

export const Header = () => {
  const [btn, setBtn] = useState("Sign In / Sign up");

  const isOnline = useOnline();

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
          {/* here we have used <Link> tag it is provided by react-router library
        it is similar ti <a> tag but <a> tag loads page when we click on defined path but 
        <Link> tag will not refresh the page , it makes performace fast and UI looks clean
        it is only applicable for client side routing   */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">InstaMart</Link>
          </li>
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
          <li>
            <small>{isOnline ? "🟢 online" : "🔴 offline"}</small>
          </li>
        </ul>
      </div>
    </div>
  );
};
