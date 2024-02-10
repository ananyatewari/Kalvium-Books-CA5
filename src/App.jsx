import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Library from "./components/Library";
import Register from "./components/Register";
// import "./App.css"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css"

// this is sent to manage the state of navbar (the search bar primarily)
export default function App() {
  const [input, showInput] = useState(true);

  return (
    <>
      {/* <NavBar input={input} showInput={showInput}/> */}
      {/* <Footer /> */}
      <Routes>
        <Route
          path="/"
          element={<Library input={input} showInput={showInput} />}
        />
        <Route
          path="/register"
          element={<Register input={input} showInput={showInput} />}
        />
      </Routes>
      <Footer/>
    </>
  );
}
