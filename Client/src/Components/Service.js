import React, { Fragment } from 'react'
import styled from 'styled-components'

export default function Service() {
  return (
    <Fragment>
    <Container>
       <div className='container' id='services'>
          <div id='head1'>
            Services
            <div id='head2'>
          Catering Services
          </div>
          </div>
        <div className='row'>
            <div className='col-md-4'><img src='../images/birthday.png' alt=''></img>
              <h2>Birthday Party</h2>
              <p>There is a proper Hall and open Terrace for birthday party arrangement </p>
            </div>
            <div className='col-md-4'><img src='../images/meeting.png' alt=''></img>
            <h2>Business Meetings</h2>
            <p>There are two AC and Non AC confrence hall for meetings with proper services.</p>
            </div>
            <div className='col-md-4'><img src='../images/wedding.png' alt=''></img>
            <h2>Wedding Party</h2>
            <p>Wedding Party ground with all services of catering and with parking.</p>
            </div>
        </div>
       </div>

    </Container>
    </Fragment>
  )
}

const Container=styled.div`

.container 
{
   width:75%;
   height:550px;
   margin-left:16%;
}

#head1
{
  font-size:45px;
  font-family:poppins;
  text-align:center;
  margin-right:120px;
  padding-right:50px;
}

#head2
{
    text-align:center;
    font-size:70px; 
    text-align:center;
    font-family:poppins;
    color: rgb(181, 64, 84);
}



img {
    padding-left:40px;
}

p 
{
    font-size:20px;
    color: rgb(181, 64, 84);
}
`;
