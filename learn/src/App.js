import "./App.css";
import React, { useState } from "react";
import About from "./components/About.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alerts from "./components/Alerts.js";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [Alert, setAlert] = useState(null);
  const [mode, setmode] = useState("");
  const showAlert = (e) => {
    setAlert(e);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const setModes = (e) => {
    // setmode(e)
    console.log(e);
    if (e === "dark-red") {
      document.body.style.backgroundColor = "#230d0d";
      document.body.style.color = "white";
      setmode({
        textcolor: "#ffffff",
        textbuttoncolor: "#000000",
        buttoncolor: "#EEA47F",
      });
      setAlert({ type: "sucess", msg: "Dark red mode is enabled" });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else if (e === "white") {
      document.body.style.backgroundColor = "White";
      document.body.style.color = "black";
      setmode({
        textcolor: "black",
        textbuttoncolor: "#000000",
        buttoncolor: "#EEA47F",
      });
      setAlert({ type: "sucess", msg: "Light mode is enabled" });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else if (e === "green") {
      document.body.style.backgroundColor = "green";
      setmode({
        backcolor: "#FFA351",
        textcolor: "#000000",
        textbuttoncolor: "#000000",
        buttoncolor: "#FFBE7B",
      });
      setAlert({ type: "sucess", msg: "green mode is enabled" });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else if (e === "yellow") {
      document.body.style.backgroundColor = "#FFA351";
      // document.body.style.color = 'white'
      setmode({
        backcolor: "#FFA351",
        textcolor: "#000000",
        textbuttoncolor: "#000000",
        buttoncolor: "#FFBE7B",
      });
      setAlert({ type: "sucess", msg: "yellow mode is enabled" });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else if (e === "black") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setmode({
        backcolor: "black",
        textcolor: "#FFFFFF",
        textbuttoncolor: "#000000",
        buttoncolor: "#FEE715",
      });
      setAlert({ type: "sucess", msg: "black mode is enabled" });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    } else if (e === "blue") {
      document.body.style.backgroundColor = "#00539C";
      document.body.style.color = "white";
      setmode({
        textcolor: "#ffffff",
        textbuttoncolor: "#000000",
        buttoncolor: "#EEA47F",
      });
      setAlert({ type: "sucess", msg: "blue mode is enabled" });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  };
  return (
    <> 
      <BrowserRouter>
        <Navbar mode={setModes} withMode={mode} title="TextInfo" aboutText='About'/>
        <div class="container">
          <Alerts Alert={Alert} />
          <Routes>
          <Route exact path="/" element={<TextForm
                withMode={mode}
                Alert={showAlert}
                heading="Enter Text to analyse"
              />} />
          <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
