import React, { useEffect ,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getAllFood } from '../actions/FoodActions'
import Navbar from './Navbar';
import Menu from './Menu'


function CartData() {


const dispatch=useDispatch()
const Foodstate = useSelector((state) => state.getAllFoodReducer);


useEffect(()=>{
  dispatch(getAllFood())
},[dispatch])

const { foods} = Foodstate;

      return (
        <>
        <div className='nav' style={{height:"80px",backgroundColor:"skyblue"}}>
            <Navbar />
        </div>
       
  <div className='flex'>
  {foods.map((food) => (
                <Menu food={food} />
            ))
            }
        </div>
        </>
        
  )
}

export default CartData;