import React from 'react'
import styled from 'styled-components';

export default function Forgot() {
  return (
    <Container>
    <div className='bg-image'>
    <img src="../images/logo.png" alt='logo'></img>
    <div className="container">
    <div className="row col-md-3" id='rowdata'>
        <div className="offset-md-4 form login-form" id="flm">
            <form>
                <h2 className="text-center text-white">Forgot Password</h2>
                <p className="text-center text-white">Enter your email.</p>    
                <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="Email Address"/>
                </div>
                    <div class="form-group">
                        <input class="form-control button btn btn-primary" type="submit" name="check-email" value="Continue"/>
                    </div>
                    <div className="link login-link text-center text-white" id='mem'>Alredy User  <a href="/login">Login now</a></div>
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
 background-image: url("../images/register.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.container 
{
    width:100%;
    height:400px;
}

#rowdata{
    margin-left:35%;
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
    font-size:20px;
}

#mem
{
    color:white;
    font-size:15px;
}

a 
{
    color:white;
    font-size:20px;
}

img 
{
    margin-left:30px;
    margin-top:20px;
}
`;
