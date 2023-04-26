import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

export default function Slider() {
  return (
    <>
    <Container>
    <div className="ImgSlider">
        <Navbar />
     <div className='Heading'>
        <h2>Paradise</h2>
        <h1>Best Restaurant...!</h1>
     </div>
     </div>
     </Container>
    
     </>
  )
}


const Container =styled.div`
margin-top:0px;

.Heading 
{
    text-align: center;
    margin-top:120px;
}

h2 {
    font-size:100px;
    color:white;
    font-family:sans serif;
}

h1 {
    font-size:100px;
    color:white;
    font-family:poppins;
}

.ImgSlider
         {
            z-index:-1;
            width: 100%;
            height: 745px;
            position:static;
            background-size: 100% 100%;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            animation: changeImage 25s linear infinite;
            transition-delay: 5s;
           
        
            margin-bottom: 40px;
         }
        
         @keyframes changeImage {
            0%
            {
                background-image:url("../images/i4.jpg")
            }
           
            25%
            {
                background-image:url("../images/i2.jpg")
            }
        
            50%
            {
                background-image:url("../images/i3.jpg")
            }
        
            75%
            {
                background-image:url("../images/i1.jpg")
            }

            100%
            {
                background-image:url("../images/i5.jpg")
            }
         }

`;