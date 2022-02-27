import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './screen/Home';
import Header1 from './components/Header1';
import Scores from './components/ScoreCard.js';

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
    <Scores/>

  {/* <h1> helloo</h1> */}
    </>
  );
}

export default App;
