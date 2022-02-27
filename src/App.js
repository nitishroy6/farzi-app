import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import Home from './screen/Home';
import Header1 from './components/Header1';
import Scores from './components/ScoreCard.js';
=======
import {Routes, Route,BrowserRouter} from "react-router-dom";
import Home from './screen/Home.js';
import Dashboard from './screen/Dashboard.js';
import Test from './screen/Test.js';
import Header1 from './components/Header1'
>>>>>>> 130ba1620df52a6dc72b07438bf1dd6518d204a1

function App() {
  const [color, setColor] = useState("1");
  // useEffect(() => {
  //  clickhandle();
  // });

  function clickhandle(){
    if (color == "1") {
      setColor("2");
    }
    if (color == "2"){
    setColor("1");
    }
  }
  return (
    <>
<<<<<<< HEAD
    {/* <Home/> */}
    <Scores/>
=======
>>>>>>> 130ba1620df52a6dc72b07438bf1dd6518d204a1

  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/dashboard" element={<Dashboard/>} />
        <Route  path="/test" element={<Test/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
