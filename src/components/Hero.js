import React from "react";
import victorImage from '../pictures/victorlangat.jpg';


function Hero() {
  return (
    <>
    <div className="hero">
        <img src = {victorImage} alt = "Victor Langat"/>
        <div className="hero-text">
      <h2>Victor Kipngetich Langat</h2>
      <ul>
        <li>Frontend </li>
        <li>React </li>
        <li>JavaScript</li>
      </ul>
      </div>
    </div>
    <hr />
    </>
  );
}
  export default Hero;
