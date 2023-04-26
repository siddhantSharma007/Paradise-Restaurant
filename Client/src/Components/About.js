import React from 'react'
import styled from 'styled-components'

export default function About() {
  return (
    <Container>
      <div>
        <div>
      <h1>About</h1> 
      </div>
      <div>
      <p  style={{color: "black" ,fontSize:"40px" , textAlign:"center"}}> Paradise Restaurant</p> 
      </div>
      </div>
    <div className='container' id='chefb'>
        <div className='row'>
            <div className='col-md-4'>
              <img src="../images/chef.jpg" alt='chef1'></img>
            </div>

            <div className='col-md-4'>
            <img src="../images/chef2.png" alt='chef1'></img>
            </div>

       <div className='col-md-4'>
              <p style={{color: "black"}} id="para">Paradise Restaurant, Aligarh is a Restaurant with modern amenities and exemplary services, located about 5 kilometers from Railway Station. Beautifully built and elegantly furnished, it offers esteemed guests a blend of luxury and comfort. Paradise Restaurant is dressed in a stunning earth-toned interior that appreciates both Western elegance and spirited local charm.

We invite you to take a closer look and discover unmistakable hospitality in this Restaurant in Aligarh that we call home..</p>
                 <h3 style={{color: "black" }}>Mon - Fri 8 AM - 11 PM</h3>
                 <h2 style={{color: "black"}}>+91-7078171105</h2> 
                
             </div>
 </div>
          
        </div>
        </Container>
  )
}

const Container =styled.div`
 

#para
{
  font-size:22px;
}
.container 
{
    display:block;
    width:75%;
    height:500px;
    margin-top:20px;
    text-align:center;
    margin-left:250px;
    
}

h1
{
  font-size:60px;
  text-align:center;
  color: rgb(181, 64, 84);
}

td {
    padding-left:30px;
    margin-bottom:40px;
    
}
p {
  font-style:bold;
  font-size:10px;
}

`;