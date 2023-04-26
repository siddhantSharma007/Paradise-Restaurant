import React, { Fragment } from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Fragment>
        <Container>
            <footer>
           <div className='containe'>
            <div className='box'>
                <div className='row'>
                    <div className='col-md-3'><h1>Feliciano</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='icons'>
        <ul id='ul2'>
            <li className='li2'><a href=" "><img src='../images/twitter.png' alt='tw' className='img2'></img> </a></li>
            <li className='li2'><a href=" "><img src='../images/facebook.png' alt='tw' className='img2'></img> </a></li>
            <li className='li2'><a href=" "><img src='../images/instagram.png' alt='tw' className='img2'></img> </a></li>
            <li className='li2'><a href=" "><img src='../images/google-plus.png' alt='tw' className='img2'></img> </a></li>
        </ul>
        </div>
                    </div>
                    <div className='col-md-3'><h1>Open Hours</h1>
                        <ul>
                        <li><span>Monday</span>
                        <span className='time'>09:00-24:00</span>
                        </li>
                        <li><span>Tuesday</span>
                        <span className='time'>09:00-24:00</span>
                        </li>
                        <li><span>Wednesday</span>
                        <span className='time'>09:00-24:00</span>
                        </li>
                        <li><span>Thursday</span>
                        <span className='time'>09:00-24:00</span>
                        </li>
                        <li><span>Friday</span>
                        <span className='time'>09:00-24:00</span>
                        </li>
                        <li><span>Saturday</span>
                        <span className='time'>09:00-24:00</span>
                        </li>
                        <li><span>Sunday</span>
                        <span className='time'>09:00-24:00</span>
                        </li>
                        </ul>
                    </div>
                    <div className='col-md-3'><h1>Instagram</h1>
                    <div className='image'>
                <img src='../images/footer.jpg' alt='footer'></img>
                    </div>
                    </div>
                    <div className='col-md-3'><h1>Newsletter</h1>
                    <p>Far far away, behind the word mountains, far from the countries.</p>
                    <input type="text" name="subscribe" placeholder="Enter Email Address"></input>
                    <button>Subscribe</button>
                    </div>
                </div>
                <div id='copy'>
                <h4>Copyright ©2023 All rights reserved | This Website is made by Siddhant Sharma</h4>
                </div>
            </div>
           </div>
           </footer>
        </Container>
    </Fragment>
  )
}
const Container=styled.div`
width:100%;
border:2px solid black;
background-color:black;
justify-content:center;
margin-top:150px;
 position:absolute;
display:flex;

#ul2
{
    display:flex;
}


#copy
{
    justify-content:center;
    text-align:center;
    color:white;
}

.img2
{
    background-color:white;
    width:40px;
    margin-top:50px;
}


{
    display:flex;
}

.image
{
    width:200px;
    height:200px;
    background-color:white;
}

h2
{
    font-size:25px;
    margin-left:15px;
    font-weight:bold;
    color:white;
    text-align:center;
}

button
{
    margin-top:20px;
    display:flex;
    width:200px;
    height:45px;
    // margin-left:40px;
    justify-content:center;
    padding-top:5px;
    color:white;
    background-color: burlywood;
    font-size:20px;
    border:0;
    border-radius:5px;
    font-weight:bold;
}

input
{
    width:200px;
    height:45px;
    font-size:20px;
    font-weight:bold;
    border-radius:5px;

}

h1
{
    font-size:25px;
    font-weight:bold;
    color:white;
}

.time
{
    padding-left:20px;
    margin-left:20px;
    padding-left:0px;
}

p
{
    margin-top:30px;
    font-size:20px;
    margin-left:7px;
    color:white;
}

ul
{
    list-style-type: none;
}

span
{
    font-size:20px;
    font-weight:bold;
}

li
{
    display:flex;
    color:white;
}

`;
