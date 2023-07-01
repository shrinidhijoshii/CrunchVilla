import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
import UserContext from "../utils/userContext";

export const Header = () => {
  const [btn, setBtn] = useState("Sign In / Sign up");

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  return (
    <div className="lg:flex lg:justify-between shadow-md m-5 text-center">
      <div className="logo-container">
        <img
          className="h-24 p-1 ml-auto mr-auto"
          src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/c3e1073a-2db1-4049-b297-bda8c1a45be1.png"
        ></img>
      </div>

      <div>
        <ul className="lg:flex py-10 lg:space-x-6">
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
          <li>{user.name}</li>
          <li>
            <small>{isOnline ? "🟢 online" : "🔴 offline"}</small>
          </li>
        </ul>
      </div>
    </div>
  );
};
