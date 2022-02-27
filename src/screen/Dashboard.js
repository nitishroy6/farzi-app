import React from 'react';
import '../style/Home.css';

// import { CgUserlane } from 'react-icons/cg';
// import { BiSearchAlt } from 'react-icons/bi';
// import {FaUserCircle} from 'react-icons/fa';

function Dashboard()  {

  return (
    <>
    <div className='main-nav'>
        <div className='logo'>
        <ul>
          <li>
            <a href=''>
              {/* <CgUserlane className="react-icon farzi"/> */}
            </a>
          </li>
          &nbsp;&nbsp;
           <li>
          <h1>
          <span>F</span>arzi
          <span>-A</span>pp
          </h1>
          </li>
        </ul>   
      </div>
      <div className='menu-link'>
       <ul>
          <li>
           <a href='#' className='livescore' >LIVE SCORE</a>
          </li>
          <li>
          <a href='#'>Schedule</a>
          </li>
          <li>
          <a href='#'>Teams</a>
          </li>
          <li>
          <a href='#'>News</a>
          </li>
          <li>
          <a href='#'>Features</a>
          </li>
          <li>
          <a href='#'>Videos</a>
          </li>
          <li>
          <a href='#'>Stats</a>
          </li>
          </ul>
          </div>
          
    <div className='icons'>
        <ul className='icons-desktop'>
          <li>
            <a href='#'>
              {/* <BiSearchAlt className="react-icon"/> */}
            </a>
          </li>
          <li>
            <a href='#'>
              {/* <FaUserCircle className="react-icon"/> */}
            </a>
          </li>
        </ul>

      </div>
    </div>

    {/* hero section */}

    <section className='hero-section'>
      <marquee scrollamount="8"><h3>WELCOME TO THE OFFICIAL FARZI-APP WEBSITE.</h3></marquee> 

    </section> 
    </>
  );
}

export default Dashboard;



{/* 
/
  //  clickhandle();
  // 

  // function clickhandle(){
    if (color == "1") {
      setColor("2");
    }
    if (color == "2"){
    setColor("1");
    }
  } */}
