import React, {useState, useEffect} from 'react';
import '../style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/Header.css';
import Header1 from '../components/Header1.js';
var sInterval;
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
// useEffect(()=> {
//   fetchScore();
//   },[]);

  useEffect(()=> {
   sInterval =  setInterval(() => {
      fetchScore();
     }, 5000);
   },[]);
const fetchScore = async () => {
let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJudW1iZXJfZXhpc3QiOjEsInN0YXR1cyI6MjAwLCJhYmMiOiI3NjU0MzA0OTQ4IiwibWVzc2FnZSI6IkxvZ2dlZGluIFN1Y2Nlc3NmdWxseSIsInZhbGlkaXR5Ijp0cnVlLCJudW1iZXIiOm51bGx9.pp1Thx6rDVYr-YnkOeOtyDLFvrBDfrApzBF3OtekaIE"; 

const response = await fetch ('https://farziapp.noobdeveloper.site/api/getdata',{

method:'GET',

headers:{
  'Accept' : 'application/json',
  'Content-Type' : 'application/json'
},

 });
 let retrieved = await response.json();
 console.log("cateq",retrieved);
   let totalRun = [];
      retrieved.map(item => {
  
        // totalRun.push({
        //       label: item.subcate_title,
        //       value: item.subcate_id
        //   })
      });

// const categoryList = await retrieved.info;
// // console.log("category",categoryList);
// setCategory(categoryList);
// console.log("cate",newCategory);
}

  return (
    <div className='body'>
    <Header1/>
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
