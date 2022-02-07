import React, {useState, useEffect} from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Home() {
   const [runs, setRuns] = useState("154");
   const [wickets, setWickets] = useState("3");
   const [overs, setOvers] = useState("5.0");
   const [isLive, setIsLive] = useState(false);
   useEffect(() => {
    document.title = "Client App"
  }, [])
  // useEffect(() => {
  //  clickhandle();
  // });

//   function clickhandle(){
//     if (color == "1") {
//       setColor("2");
//     }
//     if (color == "2"){
//     setColor("1");
//     }
//   }

  return (
    <>
    <div className='body'>
      <div>
        <h2 className='header'>Live Cricket Score</h2>
        <button onClick={() => {isLive ? setIsLive(false) : setIsLive(true)}}>{isLive?'End Session':'Go Live'}</button>
        </div>
        <hr/>
        {isLive?
        <div>
        <h3>India</h3>
        <h5>{runs}-{wickets}({overs}v)</h5>
        </div>
        :
        <div className='text-center'>There are no matches at the moment. Please check back later.</div>
        }
    </div>
    </>
  );
}

export default Home;
