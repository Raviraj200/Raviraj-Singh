import React from "react";
import './index.css'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare, FaPhoneAlt, FaTelegram,FaMoon } from "react-icons/fa";
// import Ecom from "Ecom"
// import './Rema';
import { NavLink } from "react-router-dom";
import Ravi from "./Ravi";



import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
// import Ecom from "./Ecom";

const Card = () => {
  
  return (
    <>
      <nav class="navbar navbar-expand-lg  navbar-light bg-dark d-xl-none  ">
        <div class="container-fluid ">
        {/* <button type="button" class="btn btn-outline"></button> */}
          <div className="wrapper"><a className="static_txt navbar-brand fs-4  text-info  " href="/">Raviraj Singh</a>

          </div>
          <button class="navbar-toggler text-info active " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-info "></span>
          </button>
          <div class="collapse navbar-collapse text-info" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-6 bg-dark text-center  ">
              <li class="nav-item text-light">
                <a className="menu_active nav-link active text-light  " aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a to={Ravi} className="menu_active nav-link text-light" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a className="menu_active nav-link text-light" href="#skil">Skills</a>
              </li>
              <li class="nav-item">
                <a  className="menu_active nav-link text-light" href="#project">Project</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-info" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Social Media Link
                </a>
                <ul className="ravi_raj dropdown-menu text-center w-75  mx-5 bg-dark rounded-3 my-3" aria-labelledby="navbarDropdown">
                  <li><a class=" dropdown-item fs-2 text-info text-center  " href="#"><BsFacebook /></a></li>

                  <li><a class="dropdown-item fs-1 text-info text-center" href="#"><AiFillInstagram /> </a></li>
                  <li><a class="dropdown-item fs-2 text-info text-center" href="#"><FaPhoneAlt /> </a></li>
                  <li><a class="dropdown-item fs-1 text-info text-center" href="#"><FaTelegram /> </a></li>
                  {/* <li><hr class="dropdown-divider " /></li> */}
                  {/* <li><a class="dropdown-item text-center text-info fs-2 " href="#"> <BsFillCheckCircleFill/></a></li> */}
                  <li><a class="dropdown-item text-center text-info fs-1 " href="#"><AiFillLinkedin /></a></li>
                  <li><a class="dropdown-item text-center text-info fs-2 " href="#"><BsGithub /></a></li>
                  <li><a class="dropdown-item text-center text-info fs-2 " href="#"><FaGitSquare /></a></li>
                </ul>
              </li>


              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-info text-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other
                </a>
                <ul className="ravi_raj dropdown-menu text-center w-75  mx-5 bg-dark rounded-3 my-3" aria-labelledby="navbarDropdown">
                  <li><a class=" dropdown-item fs-2 text-info text-center  " href="#"><BsFacebook /></a></li>

                  <li><a class="dropdown-item fs-1 text-info text-center" href="#"><AiFillInstagram /> </a></li>
                  <li><a class="dropdown-item fs-2 text-info text-center" href="#project"><FaPhoneAlt /> </a></li>

                </ul>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled text-light dropdown-item" href="#waw">Contact</a>
              </li> */}
                           {/* <li><a class="dropdown-item text-center text-info fs-2 " href="#waw">Contact</a></li> */}
                           <li class="nav-item">
                <a className="menu_active nav-link text-light" href="#waw">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      
    </>
  )
};
export default Card;