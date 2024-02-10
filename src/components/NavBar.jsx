import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Quote from "./Quote";

export default function NavBar({ input, showInput, result, setResult }) {
  // based on whether we are on the library page or the register page, we check whther we have to display the search bar or not
  return (
    <>
      {input ? (
        <>
          <nav>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              {/* <span>START SEARCHING 🔍</span> */}
              <input
              placeholder="Start looking 🔍"
                type="search"
                value={result}
                onChange={(e) => setResult(e.target.value)}
              />
            </div>
            <div>
              <Link to={"/register"} onClick={() => showInput(false)}>
                <button className="transition duration-100">Register</button>
              </Link>
            </div>
          </nav>
          <Quote />
        </>
      ) : (
        <nav>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <Link to={"/"} onClick={() => showInput(true)}>
            <div>
              <button className="transition duration-100">
                Click to go back
              </button>
            </div>
          </Link>
        </nav>
      )}
    </>
  );
}
