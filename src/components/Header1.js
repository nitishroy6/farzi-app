import React, { useState, useEffect } from "react";
import icon from "../Assets/search-icon.jpg";
import profile from "../Assets/profile-icon.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa-solid fa-id-card-clip } from '@fortawesome/free-solid-svg-icons'

function Header1() {
  return (
    <>
      <div className="farzi-app">
        {/* <div className="farzi-app"> */}
          <ul className="Score">
            <li className="logo">
              <a>CRICKET-CLUB</a>
            </li>
            <li>
              <a>Live Scores</a>
            </li>
            <li>
              <a>Schedule</a>
            </li>
            <li>
              <a>Archives</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Series</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>SignUp</a>
            </li>
            <li>
              <a href="login">Login</a>
            </li>
            <input type="search" placeholder="Search Here.." />
            <i className="bi bi-search"></i>
            <i className="fa-solid fa-user"></i>
          </ul>
        {/* </div> */}
      </div>
    </>
  );
}

export default Header1;
