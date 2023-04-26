import React, { Fragment } from 'react'
import styled from 'styled-components';

export default function Chef () {
  return (
    <Fragment>
    <Container>
       <div className='container'>
        <div className='box'>
          <div id='head1'>
         Chef 
         </div>
         <div id='head2'>
         Our Master Chef
          </div>
          </div>
          <div className='row'>
         <div className='col-md-3'> 
            <div><img src='../images/chef4.png' alt='chef1'></img></div>
            <div>
            <h1>Gloria Jenkins</h1>
            <span>Head Chef</span>
          </div>
       <div>
        <ul>
        <li><a href=" "><img src='../images/twitter.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/facebook.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/instagram.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/google-plus.png' alt='tw'></img> </a></li>
        </ul>
       </div></div>

       <div className='col-md-3'> 
            <div><img src='../images/chef2.jpg' alt='chef1'></img></div>
            <div>
            <h1>John Smooth</h1>
            <span>Head Chef</span>
          </div>
       <div>
        <ul>
        <li><a href=" "><img src='../images/twitter.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/facebook.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/instagram.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/google-plus.png' alt='tw'></img> </a></li>
        </ul>
       </div></div>

       <div className='col-md-3'> 
            <div><img src='../images/chef3.png' alt='chef1'></img></div>
            <div>
            <h1>Rebeca Welson</h1>
            <span>Chef</span>
          </div>
       <div>
        <ul>
        <li><a href=" "><img src='../images/twitter.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/facebook.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/instagram.png' alt='tw'></img> </a></li>
        <li><a href=" "><img src='../images/google-plus.png' alt='tw'></img> </a></li>
        </ul>
       </div></div>

       <div className='col-md-3'> 
            <div><img src='../images/chef1.jpg' alt='chef1'></img></div>
            <div>
            <h1>Kharl Branyt</h1>
            <span>Chef</span>
          </div>
       <div>
        <ul>
            <li><a href=" "><img src='../images/twitter.png' alt='tw'></img> </a></li>
            <li><a href=" "><img src='../images/facebook.png' alt='tw'></img> </a></li>
            <li><a href=" "><img src='../images/instagram.png' alt='tw'></img> </a></li>
            <li><a href=" "><img src='../images/google-plus.png' alt='tw'></img> </a></li>
        </ul>
       </div></div>
         
          </div>
       </div>

    </Container>
    </Fragment>
  )
}

const Container=styled.div`

.container 
{
   width:85%;
   height:800px;
   
}

img
{
    padding-left:10px;
    color: rgb(181, 64, 84);
    padding-top:5px;
}

.box
{
   margin-right:13px;
}

#head1
{
  font-size:50px;
  font-family: PT Sans;
  text-align:center;
  color: rgb(181, 64, 84);
  margin-right:120px;
  padding-right:50px;
 
}

#head2
{
    text-align:center;
    font-size:70px; 
    text-align:center;
    font-family:poppins;
    font-weight:bold;
}
td{
    width:400px;
    height:350px;
}

ul 
{
    display:flex;
}

span
{
    font-size:20px;
}

ul
{
    list-style-type:none
}

`;

