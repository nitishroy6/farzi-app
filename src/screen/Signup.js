import React, {useState,useEffect} from 'react';
import '../style/Signup.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header1 from '../components/Header1.js';

function Signup() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
        // const formSubmit=(e)=>{
        //   e.preventDefault()
        //   console.log("email",email);
        //   console.log("address",address);
          
        // };
    return (
        <>
            <Header1/>


            <div className='Login-form'>
                <h1> Signup </h1>
                {/* <p>We will send OTP to your email id</p> */}
                <br/>
                <form>
                    <input className='email-class' type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e)}/><br/><br/>
                    <input className='email-class' type="text" placeholder="Enter Your Email" onChange={(e)=>setEmail(e)}/><br/><br/>
                    <input className='email-class' type="password" placeholder="Enter Your Password" onChange={(e)=>setPassword(e)}/><br/>
                    <button type="button" class="signup-btn">Signup</button>
                    <br/><br/>
                    <p>Have already an account?<a href='#'>Login</a></p>
                </form>
            </div>
        </>
    );
}

export default Signup;