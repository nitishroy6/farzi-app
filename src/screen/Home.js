import React from 'react';
import '../style/Home.css';
import '../style/Header.css';
import Header1 from '../components/Header1.js';
function Home()  {

  return (
    <>
    <Header1/>
    <div>
        <h1 className='header'>Cricket Live Score Ticker Application Modeling</h1>
        <h3 className='sub-header'>India</h3>
        <h5 className='sub-header1'>111-10(14.6Ov)</h5>
    </div>
    </>
  );
}

export default Home;



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
