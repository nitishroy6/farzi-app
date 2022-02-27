import React, { useState, useEffect } from "react";
import icon from "../Assets/search-icon.jpg";
import profile from "../Assets/profile-icon.jpg";
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
              <a>Login</a>
            </li>
            <input type="search" placeholder="Search Here.." />
            <img src={icon}></img>
            <img src={profile}></img>
          </ul>
        {/* </div> */}
      </div>
    </>
  );
}

export default Header1;
