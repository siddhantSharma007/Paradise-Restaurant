import React, { Fragment } from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {

  const History=useNavigate();
  const[table,setTable]=useState({
    name:"",email:"",phone:"",date:"",time:"",persons:""
  });

  let name,value;
  const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;

      setTable({...table,[name]:value});
  }

  const PostData =async (e)=>{
    e.preventDefault();
    const {name,email,phone,date,time,persons}= table;
    const res=await fetch("/booking",{
      method:"POST",
      headers: {
          "Content-Type":"application/json"
      },
      body: JSON.stringify({
          name,email,phone,date,time,persons
      })
    });
    const data=await res.json();
    console.log(data);
    if(res.status=== 422 || !data) {
      window.alert("Invalid Request");
    }
    else{
      window.alert("Booking Successfully");
      History("/");
    }
}

  return (
    <Fragment>
      <Container>
        <div className='container' id='book'>
       <div className='headi'>
        <div id='head1'>
        Book a table
           </div>
            <div id='head2'>
           Make Reservation
          </div>
          </div>
          <div className='box'>
          <form method='POST'>
          <div className='row'>
            <div className='col-md-8'>
              <th><span><b>Name</b></span></th>
              <input type="text" name='name'
              value={table.name}
              onChange={handleInputs}
              placeholder='Your Name'required></input>
            </div>
            <div className='col-md-3'>
            <th><span><b>Email</b></span></th>
              <input type="email" name='email'
              value={table.email}
              onChange={handleInputs}
              placeholder='Your Email'required></input>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-8'>
            <th><span><b>Phone</b></span></th>
              <input type="text" name='phone'
              value={table.phone}
              onChange={handleInputs}
              placeholder='Your Phone No'required></input>
            </div>
            <div className='col-md-3'>
            <th><span><b>Date</b></span></th>
              <input type="date" name='date'
              value={table.date}
              onChange={handleInputs}
              placeholder='Date'required></input>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-8'>
            <th><span><b>Time</b></span></th>
              <input type="time" name='time'
              value={table.time}
              onChange={handleInputs}
              placeholder='Time'required></input>
            </div>
            <div className='col-md-3'>
            <th><span><b>Persons</b></span></th>
             <select name='persons' value={table.persons} onChange={handleInputs}>
             <option>Persons</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
             </select>
            </div>
          </div>
          </form>
          <button onClick={PostData}>Make Reservation</button>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}
const Container=styled.div`
margin-top:50px;
.container
{
  width:800px;
  height:700px;
  background-color:white;
  float:left;
  margin-left:80px;
  margin-top:100px;
}

.box
{
  margin-left:20%;
  margin-right:20%;
}

input
{
  width:200px;
  height:40px;
}

span
{
  
  font-size:20px;
}

.headi
{
  margin-right:15%;
}

select
{
  font-size:20px;
  width:200px
}

th
{
  margin-bottom:10px;
  margin-top:20px;
}

button
{
  margin-left:96px;
  font-size:30px;
  margin-top:40px;
  border-radius:5px;
  color:white;
  color: rgb(181, 64, 84);
  border:3px solid black;
  background-color:black;
}


#head1
{
  font-size:60px;
  text-align:center;
  color: rgb(181, 64, 84);
  
}
#head2
{
  font-size:40px;
  font-weight:bold;
  text-align:center;
  padding-bottom:50px;
}

`;