import React, {useState, useEffect} from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/Header.css';
import Header1 from '../components/Header1.js';
import ModalTest from '../components/ModalTest.js';
import ScoreCard from '../components/ScoreCard.js';
var sInterval;
function Home() {
   const [runs, setRuns] = useState('');
   const [wickets, setWickets] = useState('');
   const [overs, setOvers] = useState("5.0");
   const [isLive, setIsLive] = useState(false);
   useEffect(() => {
    document.title = "Client Application"
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
// useEffect(()=> {
//   alert("hello")
//   fetchScore();
//   },[]);

  useEffect(()=> {
   sInterval =  setInterval(() => {
      fetchScore();
     }, 5000);
   },[]);
const fetchScore = async () => {
 const response = await  fetch('https://farziapp.noobdeveloper.site/api/getdata',{
method:'GET',
headers:{
  'Accept' : 'application/json',
  'Content-Type' : 'application/json'
},

 });
 let retrieved = await response.json();
 console.log("cateq",retrieved);
   let totalRun = [];
   let totalWicket = [];
   let totalBall = [];
      retrieved.map(item => {
        totalRun.push(item.run)
        totalWicket.push(item.wicket)
        totalBall.push(item.ball)
      });
      var tRun = totalRun.reduce((a,v) => a =  a + v, 0 );
      var Twicket = totalWicket.reduce((a,v) => a =  a + v, 0 );
      var balls = totalBall.reduce((a,v) => a =  a + v, 0 );
      setRuns(tRun);
      setWickets(Twicket);
      setOvers(balls);
      


// const categoryList = await retrieved.info;
// // console.log("category",categoryList);
// setCategory(categoryList);
// console.log("cate",newCategory);
}

  return (
    <div className='text-center'>
    <Header1/>
    <ModalTest/>
      <div>
        <h2 className='header'>Live Cricket Score</h2>
        <button className='btn btn-warning p-5 md-3' onClick={() => {isLive ? setIsLive(false) : setIsLive(true)}}>{isLive?'End Session':'Go Live'}</button>{' '}
        </div>
        <hr/>
        {isLive?
        <div>
        <h3>India</h3>
        <h5>{runs}-{wickets}({overs}v)</h5>
        </div>
        :
        <div className='text-center font-italic'>There are no matches at the moment. Please check back later.</div>
        }
    
        {/* <h1 className='header'>Cricket Live Score Ticker Application Modeling</h1>
        <h3 className='sub-header'>India</h3>
        <h5 className='sub-header1'>111-10(14.6Ov)</h5> */}
    </div>
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
