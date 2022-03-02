import React, {useState,useEffect} from 'react';
import '../style/Login.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header1 from '../components/Header1.js';

function Login() {
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
            {/* <form action="action_page.php" method="post"> */}
            {/* <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
                </div> */}

            {/* <div className="container">
                <label htmlFor='uname'><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label htmlFor='psw'><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>

            <div className="container" style={{backgroundColor: "lightblue"}}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
            </form> */}


            <div className='Login-form'>
                <h1> Login </h1>
                <p>We will send OTP to your email id</p>
                <br/>
                <form>
                    <input className='email-class' type="text" placeholder="Enter Your Email" onChange={(e)=>setEmail(e)}/><br/><br/>
                    <input className='email-class' type="password" placeholder="Enter Your Password" onChange={(e)=>setPassword(e)}/><br/>
                    <button type="button" class="login-btn">Login</button>
                    <br/><br/>
                    <p>Forget <a href="#">Password?</a></p>
                    <p>Don't have an account?<a href='#'>Sign up</a></p>
                </form>
            </div>
        </>
    );
}

export default Login;