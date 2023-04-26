import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';

const SignUp = () => {
  const History=useNavigate();
  const[user,setUser]=useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  });


  const dispatch=useDispatch();


  let name,value;
  const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;

      setUser({...user,[name]:value});
  }

  const PostData =async (e)=>{
      e.preventDefault();
      const {name,email,phone,password,cpassword}= user;
      dispatch(registerUser(user));
      const res=await fetch("/register",{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name,email,phone,password,cpassword
        })
      });
      const data=await res.json();
      if(res.status=== 422 || !data) {
        window.alert("Invalid Registration");
      }
      else{
        window.alert("Registration successfully");
        History("/");
      }
  }



  return (
    <Container>
    <div className='bg-image'>
    <img src="../images/logo.png" alt='logo'></img>
    <div className="container">
    <div className="row col-md-4" id='rowdata'>
        <div className="offset-md-4 form login-form" id="flm">
            <form method='POST'>
                <h2 className="text-center text-white">SignUp Form</h2>
                <p className="text-center text-white">SignUp with your email and password.</p> 
                <div className="form-group">
                        <input className="form-control" type="text" name="name" 
                         value={user.name}
                         onChange={handleInputs}
                        placeholder="Full Name"/>
                    </div>   
                <div className="form-group">
                    <input className="form-control" type="email" name="email" 
                     value={user.email}
                     onChange={handleInputs}
                     placeholder="Email Address"/>
                </div>
                <div className="form-group">
                        <input className="form-control" type="text" name="phone"  pattern="[7-9]{1}[0-9]{9}"
                        value={user.phone}
                        onChange={handleInputs}
                        placeholder="Mobileno"  required/>
                    </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" 
                    value={user.password}
                    onChange={handleInputs}
                     placeholder="Password" required/>
                </div>
                <div className="form-group">
                        <input className="form-control" type="password" name="cpassword"
                        value={user.cpassword}
                        onChange={handleInputs}
                         placeholder="Confirm password" required/>
                    </div>
                <div className="link forget-pass text-left"><a href="/Forgot">Forgot password?</a></div>
                <div className="form-group">
                    <input className="form-control button btn btn-primary" type="submit" name="signUp" value="Register"
                    onClick={PostData}
                    />
                </div>
       <div className="link login-link text-center text-white" id='mem'>alredy member? <a href="/">Login now</a></div>
       
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
 background-image: url("../images/register1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

#flm
{
    margin-top:125px;
}

#rowdata{
    margin-left:35%;
}

h2
{
    color:white;
    font-size:25px;
}

img 
{
    margin-left:30px;
    margin-top:20px;
}

p
{
    color:white;
    font-size:15px;
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
`;

export default SignUp;
