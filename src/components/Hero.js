import React from "react";
import jslogo from "../logos/javascript.svg";
import reactlogo from "../logos/react.svg";
import expresslogo from "../logos/express.svg";

function Hero() {
  return (
    <>
    <div className="hero">
        <div className="hero-text">
      <h2>Victor Langat</h2>
      <ul>
        <li><span><img src = {jslogo} alt = "javascript"/></span>JavaScript </li>
        <li><span><img src = {reactlogo} alt = "react"/></span>ReactJS </li>
        <li><span><img src = {expresslogo} alt = "express"/></span>ExpressJS</li>
      </ul>
      </div>
    </div>
    <hr />
    </>
  );
}
  export default Hero;
