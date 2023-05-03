import React from 'react'
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Projects.css";

import Thumbnailtodolist from "../images/thumbnailtodolist.PNG";
import Thumbnailweather from "../images/thumbnailweather.PNG";
import Thumbnailcalci from "../images/thumbnailcalci.PNG";
import Thumbnailqr from "../images/thumbnailqr.PNG";
export const Projects = () => {
  return (
    <>
   
    <div className='firstcontainer'>
    <h1>My Projects</h1>
     <div className="card one" >
  <a href="https://to-do-list-vivam.netlify.app" target='blank'>
    <img src={Thumbnailtodolist} className="card-img-top" alt="img"/></a>
  <div className="card-body">
    <h3 className="card-title">Project Title:
    <a href="https://to-do-list-vivam.netlify.app" target='blank' className='vartitle'> To-do-list App</a></h3>
    <p className="card-text"><b>Skills used:</b>Reactjs,JavaScript,Html,Css,Bootstrap</p>
    <a href="https://github.com/VivamV/to-do-list" target="blank" className="btn"><GitHubIcon/></a>
    </div>
</div>
<div className="card one" >
<a href=" https://weatherapp-vivam.netlify.app" target='blank'>
     <img src={Thumbnailweather}  className="card-img-top" alt="img"/></a>
  <div className="card-body">
    <h3 className="card-title">Project Title:  
    <a href=" https://weatherapp-vivam.netlify.app" target='blank' className='vartitle'>Weather App</a></h3>
    <p className="card-text"><b>Skills used:</b>Reactjs,JavaScript,Html,Css,OpenWeatherAPI</p>
    <a href="https://github.com/VivamV/weatherapp" target="blank" className="btn "><GitHubIcon/></a>
  </div>
</div>
<div className="card one" >
    <a href="https://vivamv.github.io/qrcodegenerator/" target='blank'>
    <img src={Thumbnailqr} className="card-img-top" alt="img"/></a>
  <div className="card-body">
    <h3 className="card-title">Project Title:
    <a href="https://vivamv.github.io/qrcodegenerator/" target='blank' className='vartitle'> QR Code Generator</a></h3>
    <p className="card-text"><b>Skills used:</b>JavaScript,Html,Css,QRCodeAPI</p>
    <a href="https://github.com/VivamV/qrcodegenerator" target='blank' className="btn "><GitHubIcon/></a>
  </div>
  
</div>
<div className="card one" >
<a href="https://vivamv.github.io/calculator/" target='blank' >
    <img src={Thumbnailcalci} className="card-img-top" alt="img"/></a>
  <div className="card-body">
    <h3 className="card-title">Project Title:
    <a href="https://vivamv.github.io/calculator/" target='blank' className='vartitle'>Calculator</a> </h3>
    <p className="card-text"><b>Skills used:</b>JavaScript,Html,Css</p>
    <a href="https://github.com/VivamV/calculator" target="blank" className="btn "><GitHubIcon/></a>
  </div>
</div>
 </div>
    </>
  )
}
