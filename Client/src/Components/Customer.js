import React from 'react'
import styled from 'styled-components';


export default function Customer() {
  return (
    <>
    <Container>
       <div className='container'>
        <div className='box'>
          <div id='head1'>
           Testimony
           </div>
            <div id='head2'>
            Happy Customer
          </div>
          </div>
          
        <div className='row'>
            <div className='col-md-4'><div id='circle'></div>
              <p>"The Restaurant was well clean, and spacious, neat & hygienic. All staff was very helping nature, food was very delicious and so many variety was available in menu. Overall stay experience was very good.".</p>
              <h2>Abhishek Rawat</h2>
            </div>
            <div className='col-md-4'><div id='circle1'></div>
            <p>"Paradise Restaurant is located in an area where there is no hassle and bussle of city. It is a good Restaurant in terms of food, location and service. I have been a regular visitor of this Restaurant since last 4-5 months.".</p>
            <h2>Kuldeep Kashyap</h2>
            </div>
            <div className='col-md-4'><div id='circle2'></div>
            <p>"Excellent service, food, location, staff, cleaning, and interiors. Clean and tidy washrooms. It even has greenry all around the hotel. Great stay!"</p>
            <h2>Sunny Bhardwaj</h2>
            </div>
        </div>
       </div>

    </Container>
    </>
  )
}

const Container=styled.div`

.container 
{
   width:75%;
   height:600px;
}
#circle
{
    height: 170px;
    width: 170px;
    border:2px solid black;
    border-radius: 50%;
    background-image: url(../images/abhishek.png);
}

#circle1
{
    height: 170px;
    width: 170px;
    border:2px solid black;
    border-radius: 50%;
    background-image: url(../images/kuldeep.png);
}
#circle2
{
    height: 170px;
    width: 170px;
    border:2px solid black;
    border-radius: 50%;
    background-image: url(../images/sunny.png);
}

.box
{
   margin-right:150px;
   margin-bottom:60px;
}


#head1
{
  font-size:100px;
  font-family:poppins;
  text-align:center;
  color: rgb(181, 64, 84);
}

#head2
{
    text-align:center;
    font-size:45px; 
    text-align:center;
    font-family:poppins;
    
}

td {
    width:900px;;
    padding-top:50px;
    padding-left:80px;
}

img {
    padding-left:40px;
}

p 
{
    font-size:20px;
     margin-top:25px;
}
`;
