import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
// import { loginUserReducer } from '../reducers/userReducer';
import { LinkContainer } from "react-router-bootstrap";
import {Nav,Dropdown,Navbar} from "react-bootstrap";
import { logoutUser } from '../actions/userActions';


export default function SubNavBar() {
  const dispatch=useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const cartState=useSelector(state=>state.cartReducer);
  const { currentUser } = userState;

  return (
    <>
     <Container>
      <Navbar collapseOnSelect >
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {currentUser ? (
                <LinkContainer to="/CartScreen">
                 <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {currentUser.name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{dispatch(logoutUser())}} style={{color:"black"}} href="/logout">Logout</Dropdown.Item>
        <LinkContainer to="/OrderScreen" style={{color:"black"}}>
        <Dropdown.Item > Orders </Dropdown.Item>
        </LinkContainer>
      </Dropdown.Menu>
    </Dropdown>
                </LinkContainer>
              ) : (
                <>
                  {" "}
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
    </>
  )
}
const Container=styled.div`
height:70px;
width:100%;
// position:absolute;
padding-top:30px;
display: flex;
align-items: center;
margin-left:60%;
z-index:-1;
min-width: 600px;


a {
position: relative;
text-decoration: none;
font-family: "Poppins", sans-serif;
color:white; 
font-size: 20px;
letter-spacing: 0.5px;
padding: 0 10px;
}
a:hover{
  color:black;
}

`;
