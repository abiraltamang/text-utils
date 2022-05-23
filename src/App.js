import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} />
      <TextForm />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze below"/> */}
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
