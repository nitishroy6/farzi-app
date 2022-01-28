import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [color, setColor] = useState("1");

  useEffect(() => {
   clickhandle();
  });
  
  var data ="developer";
  let data1 = "develop";
  const data2 = "development";

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
    {/* <div className=''>first react app</div>
    <h1>hello world</h1>
    <h1>{data}</h1>
    <h1>{data1}</h1>
    <h1>{data2}</h1> */}
    {/* <button onClick={() => clickhandle()}>click me</button> */}

    <h1>
      {
      color=="1"?
      <h1>red</h1>
      :
     
      <h1>blue</h1>
      }
      </h1>
    </>
  );
}

export default App;
