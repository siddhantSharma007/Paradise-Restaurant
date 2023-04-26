import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export default function Contact() {

    const History=useNavigate();
    const[contact,setContact]=useState({
      name:"",email:"",subject:"",message:""
    });
  
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
  
        setContact({...contact,[name]:value});
    }
  
    const PostData =async (e)=>{
      e.preventDefault();
      const {name,email,subject,message}= contact;
      const res=await fetch("/contact",{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name,email,subject,message
        })
      });
      const data=await res.json();
      console.log(data);
      if(res.status=== 422 || !data) {
        window.alert("Invalid Request");
      }
      else{
        window.alert("Query Submit Successfully");
        History("/contact");
      }
  }



  return (
    <Fragment>
        <Container>
        <div className="main">
           <Navbar />
            <div className='contain'>
            <div id='head'>
            <h2>Contact</h2>
            </div>
            <div className='box2'>
                <div className='row'style={{marginTop:'45px' }}>
                    <div className='col-md-6'>
                    <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
                            className='h-100 w-100'
                            title="Paradise Restaurant"
                            style={{ border: '0'}}
                            loading='lazy'
                        ></iframe>
                    </div>
                    <div className='col-md-4'>
                        <h3>Contact us</h3>
                        <div className='form'>
                            <input type="text" name="name" placeholder="Your Name"
                             value={contact.name}
                             onChange={handleInputs}
                            ></input>
                            <input type="email" name="email" placeholder='Your Email'
                             value={contact.email}
                             onChange={handleInputs}
                            ></input>
                            <input type="text" name="subject" placeholder="Subject" 
                             value={contact.subject}
                             onChange={handleInputs}
                            ></input>
                            <textarea name='message'  value={contact.message}
                             onChange={handleInputs}>Message</textarea>
                        </div>
                        <button onClick={PostData}>Send Message</button>
                    </div>
                </div>
            </div>
            <div className='contact'>
                <div className='row'>
                    <div className='col-md-4'><p style={{color:"black",fontSize:"15px",fontStyle:"bold"}}>Address: 198 West 21th Street, Suite 721 New York NY 10016</p></div>
                    <div className='col-md-4'>
                    <span style={{color:"black"}}>Phone No</span>
                        +91-7078171105</div>
                    <div className='col-md-4'>
                    <span style={{color:"black"}}>Email-</span>
                        Paradise_Contactus@gmail.com</div>
                        
                    <div className='col-md-4'>
                    <span style={{color:"black"}}>Website-</span>
                        www.paradise.com</div>
                </div>
            </div>
            <div className='box3'>
                <Footer />
            </div>
            </div>
            </div>
        </Container>
    </Fragment>
  )
}
const Container=styled.div`

.contain
{
    width:100%;
    height:552px;
    padding-top:0px;
    position:absolute;
    background url('../images/contact.jpg');
    z-index:-1;
    
}

iframe
{
    width:100%;
    height:500px;
}

#head
{
     margin-top:400px;
}
.contact
{
    width:80%;
    margin-left:170px;
    margin-top:50px;
}

span
{
    font-size:20px;
}

button
{
margin-top:20px;
    display:flex;
    width:200px;
    height:45px;
     margin-left:40px;
    justify-content:center;
    padding-top:5px;
    color:white;
    background-color: burlywood;
    font-size:20px;
    border:0;
    border-radius:5px;
    font-weight:bold;
}

.td2
{
    height:220px;
    color: burlywood;
    font-size:20px;
}

h3
{
    margin-left:25px;
    
}

textarea
{
    width:70%;
    height:150px;
    margin-left:25px;
}

input
{
    width:70%;
    height:50px;
    margin-bottom:30px;
    margin-left:25px;
}

h2
{
    text-align:center;
    font-size:55px;
    color:white;
    font-weight:bold;
}

.data
{
    width:600px;
    height:600px;
}

.box2
{
     margin-top:100px;
     margin-left:180px;
     
     display:block;
    
}
`;

