import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import '../styles/StyleCart.css'

export default function Navbar() {
  const userState = useSelector((state) => state.loginUserReducer);
  const cartState=useSelector(state=>state.cartReducer);
  const { currentUser } = userState;
  return (
    
    <Container>
    <nav>
        <img src="../images/logo.png" alt='logo'></img>
        <a href='/'>Home</a>
        <a href='#chefb'>About</a>
        <a href='/CartData'>Menu</a>
        {currentUser ? (
        <a href='/CartScreen'><i class="fas fa-shopping-cart">Cart:{cartState.cartItems.length}</i></a>
        ):(
        <>
           
        </>
        )}
        <a href='/contact'>Contact</a>
        <a className='btn btn-primary ml-5' href='#book'>Book a Table</a>
    </nav>
    </Container>
    
  )
}
const Container=styled.div`
height:70px;
width:100%;
// position:absolute;
padding-top:30px;


Nav{
width: 70vw;
min-width: 600px;
display: flex;
align-items: center;
Justify-content: space-around;
margin: auto;
z-index:-1;
//padding-top:40px;
}

img {
  padding-right:500px;
  float:left;
  padding-left:0px;
  
}
a {
position: relative;
text-decoration: none;
font-family: "Poppins", sans-serif;
color:white; 
font-size: 25px;
letter-spacing: 0.5px;
padding: 0 10px;
}


a:hover {
background-color: black;
}

`;
