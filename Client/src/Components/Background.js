import React, { Fragment } from 'react'
import styled from 'styled-components'
import Form from './Form';

export default function Background() {
  return (
    <Fragment>
        <Container>
    <div className='containe'>  
        <img src='../images/background1.jpg'alt='back'></img>
        <Form />
    </div>
    </Container>
    </Fragment>
  )
}

const Container=styled.div`

.containe
{ 
    width:100%;
    height:65rem;
  
}

img
{
    z-index:-1;
    position:absolute;
    padding-left:0;
}

`;
