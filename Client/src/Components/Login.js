import React,{useEffect} from 'react'
import styled from 'styled-components';
import  { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';

const Login=()=> {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')

    const dispatch=useDispatch();
    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
          window.location.href = "/";
        }
      }, []);

    const loginHandler = ()=>{
        const user1 = { email, password };
        dispatch(loginUser(user1));
          window.alert("Login successfully");
        }
  return (
   <Container>
    <div className='bg-image'>
    <img src="../images/logo.png" alt='logo'></img>
    <div className="container">
    <div className="row col-md-4" id='rowdata'>
        <div className=" offset-md-4 form login-form" id="flm">
            <form method="POST">
                <h2 className="text-center text-white">Login Form</h2>
                <p className="text-center text-white">Login with your email and password.</p>    
                <div className="form-group">
                    <input className="form-control" type="email" name="email"
                     value={email}
                     onChange={(e)=>setEmail(
                        e.target.value
                      )}
                    placeholder="Email Address"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password"
                     value={password}
                     onChange={(e)=>setPassword(
                        e.target.value
                      )}
                    placeholder="Password" required/>
                </div>
                <div className="link forget-pass text-left"><a href="/Forgot">Forgot password?</a></div>
                <div className="form-group">
                    <input className="form-control button btn btn-primary"  name="login" value="Login"  
                    onClick={loginHandler}/>
                </div>
       <div className="link login-link text-center text-white" id='mem'>Not yet a member? <a href="/SignUp">Signup now</a></div>
       
            </form>
            </div>
        </div>
        </div>
    </div>
   </Container>

  )
}

const Container =styled.div`
.bg-image {
 width:100%;
 height:725px;
 background-image: url("../images/login.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

#flm
{
    margin-top:125px;
}

h2
{
    color:white;
}

p
{
    color:white;
}

#mem
{
    color:white;
}

a 
{
    color:white;
    font-size:15px;
}

img 
{
    margin-left:30px;
    margin-top:20px;
}

#rowdata{
    margin-left:35%;
}
`;










export default Login;
