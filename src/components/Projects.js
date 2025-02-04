import React from "react";
import nairouteImg from "../pictures/dash.png";
import honeymedsImg from "../pictures/honeymeds.png";

function Projects() {
    return (
        <div className="projects">
        <h1>Projects</h1>
        <h2>HoneyMeds</h2>
        <div>
        <p>A web based pharmacy built with PHP and MySQL that connects doctors,patients, and pharmaceutical companies. It streamlines prescription management, mediacation access and pharmaceutical transactions for a seamless healthcare experience.</p>
        <img src={honeymedsImg} alt = 'HoneyMeds'/ >
         </div>
        <h2>Nairoute</h2>
        <div>
        <img src={nairouteImg} alt = 'Nairoute'/ >
        <p>A smart public transport solution for Nairobi developed using React and Express. Inspired by Uber, Nairoute connects commuters with public transport options. It provides real-time tracking,route optimization and a seamless booking experience</p>
        </div>
        <h2>My Portfolio</h2>
        <div>
        <p>A personal portfolio website built with React showcasing my skills and projects. It highlights my journey as an aspiring web developer and serves as a hub for my work.</p>
        <img src="https://res.cloudinary.com/dk" alt = 'MyPortfolio'/ >
        </div>
        </div>
    )
}
export default Projects;