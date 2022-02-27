import React,{useState,useEffect} from 'react';

function Test()  {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");

  const formSubmit=(e)=>{
    e.preventDefault()
    console.log("name",name);
    console.log("email",email);
    console.log("address",address);
    
  };

  return (
      <>
  <div>Router test</div>
  <form>
      <label>Name</label>

      <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e)} /><br/><br/>

      <label>Email</label>

      <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e)} /><br/><br/>

      <label>Address</label>

      <input type="text" placeholder="Enter Address" onChange={(e)=>setAdress(e)} /><br/><br/>

<button  onClick={(event)=>formSubmit(event)}>submit</button>
  </form>
  </>
  );
}

export default Test;
