import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Scores from './components/ScoreCard.js';
import {Routes, Route,BrowserRouter} from "react-router-dom";
import Home from './screen/Home.js';
import Dashboard from './screen/Dashboard.js';
import Test from './screen/Test.js';
import Header1 from './components/Header1'
import Login from './screen/Login.js';
import Signup from './screen/Signup.js';

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
    {/* <Home/> */}
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/dashboard" element={<Dashboard/>} />
        <Route  path="/test" element={<Test/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
