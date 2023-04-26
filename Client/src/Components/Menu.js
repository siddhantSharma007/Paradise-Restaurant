import React, { useEffect ,useState} from 'react'
import { useDispatch} from 'react-redux'
import { addToCart } from "../actions/cartActions";
import '../styles/StyleCart.css'
function Menu({food}) {

console.log(food);
const [quantity, setQuantity] = useState(1);
const dispatch=useDispatch()

const addToCartHandler=()=>{
  dispatch(addToCart(food,quantity))
}
     
                    return (
                      <>
                        <div id='main1'>
                          
                        <div className="card" style={{textAlign:"center"}}>
                                <img src={food.url} width="100%" alt='product' />
                                <p style={{marginTop:"20px",fontSize:"25px"}}>{food.name} </p>                  
                                <div>
                                <p style={{display:"inline-block",marginTop:"15px",paddingRight:"20px",fontSize:"20px"}}> Rs. {food.price} /-</p>    <h6 style={{display:"inline-block",fontSize:"20px"}}>Quantity</h6>  <select 
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                              >
                                {[...Array(10).keys()].map((v, i) => (
                                  <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                  </option>
                                ))}
                </select>
                                </div>
                                <button style={{marginTop:"30px",fontSize:"15px",fontStyle:"bold",border:"1px solid black"}} onClick={addToCartHandler} className='btn btn-success'
                                >Add To Cart</button>
                            </div>
                        </div>
                        
        </>
        
  )
}

export default Menu