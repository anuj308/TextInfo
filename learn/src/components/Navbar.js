import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // for hositing in github pages replacing Link , to to a and href as it does not support routes
    <div
      className={`navbar navbar-expand-lg `}
    >
      {/* <Link
        className="navbar-brand nav-text-main "
        to="/"
        style={{ color: props.withMode.textcolor,padding:'0px 5px 0px 5px'}}
      >
        {props.title}
      </Link> */}
      <a
        className="navbar-brand nav-text-main "
        hrefto="/"
        style={{ color: props.withMode.textcolor,padding:'0px 5px 0px 5px'}}
      >
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent" 
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <Link
              className="nav-Link  nav-text-main"
              to="/"
              style={{ color: props.withMode.textcolor,padding:'0px 5px 0px 5px'}}
            >
              Home <span className="sr-only">(current)</span>
            </Link> */}
            <a
              className="nav-Link  nav-text-main"
              href="/"
              style={{ color: props.withMode.textcolor,padding:'0px 5px 0px 5px'}}
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          {/* <li className="nav-item active  nav-text-main">
            <Link
              className="nav-Link nav-text-main"
              to="/about"
              style={{ color: props.withMode.textcolor,padding:'0px 5px 0px 5px'}}
            >
              {props.aboutText} <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-Link nav-text-main"
              to="/"
              style={{ color: props.withMode.textcolor,padding:'0px 5px 0px 5px'}}
            >
              Contact <span className="sr-only">(current)</span>
            </Link>
          </li> */}
        </ul>
        </div>
        <div style={{padding:'0px 15px 0px 0px'}}>Change theme</div>
        <div id="theme-mode-box">
          <div
            className="theme-boxes"
            onClick={()=>{props.mode("black")}}
            id="black-mode"
          ></div>
          <div
            className="theme-boxes"
            onClick={()=>{props.mode("white")}}
            id="white-mode"
          ></div>
          <div
            className="theme-boxes"
            onClick={()=>{props.mode("dark-red")}}
            id="dark-red-mode"
          ></div>
          <div
            className="theme-boxes"
            onClick={()=>{props.mode("blue")}}
            id="blue-mode"
          ></div>
          <div
            className="theme-boxes"
            onClick={()=>{props.mode("yellow")}}
            id="yellow-mode"
          ></div>
          <div
            className="theme-boxes"
            onClick={()=>{props.mode("green")}}
            id="green-mode"
          ></div>
        </div>
    </div>
    
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

Navbar.defaultProps = { title: "First React app", aboutText: "About" };
