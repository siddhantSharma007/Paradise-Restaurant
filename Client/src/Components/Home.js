import React, { useEffect } from 'react'
import Slider from './Slider'
import About from './About'
import styled from 'styled-components'
import Service from './Service'
import Chef from './Chef'
import Background from './Background'
import { useNavigate } from "react-router-dom";
import Customer from './Customer'
import Footer from './Footer'


export default function Home() {

  const History=useNavigate();

  const callHomePage=async () => {
    try{
      const res=await fetch("/signin",{
        method:"POST",
        headers: {
             Accept:"application/json",
            "Content-Type":"application/json"
        }, 
        credentials:"include"
    });

    const data=await res.json();
    console.log(data);

    if(!res.status ===200)
    {
        const error=new Error(res.error);
        throw error;
    }

   } catch(err)
    {
      console.log(err);
      History('/');
    }
  }

useEffect(()=>{
  callHomePage();
},[])


  return (
    <>
    <Container>
    <Slider />
     <About />
     <Service />
     <Chef />
     </Container>
     <Background />
     <Customer />
     <Footer />
     </>
  )
}
const Container=styled.div`
  @media(max-width:998px){
    html {
      font-size:55%;
    }
  }

  @media(max-width:768px){
    html {
      font-size:45%;
    }
  }
`;