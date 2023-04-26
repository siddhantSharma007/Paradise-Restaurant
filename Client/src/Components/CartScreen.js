import React, { Suspense } from 'react'
import Navbar from './Navbar'
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,deleteFromCart} from "../actions/cartActions";
import SubNavBar from './SubNavBar';
import Checkout from './checkout';
import Footer from './Footer';

function CartScreen() {
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const total = cartItems.reduce((total, item) => total + item.priceTotal,0)
    
    return (
        <>
        <div className='main' style={{height:"80px",backgroundColor:"skyblue"}}>
            <Navbar />
        </div>
        <div className='subNav'  style={{height:"80px",justifyContent:"flex-end"}}>
        <SubNavBar />
        </div>
          <div className='container'>
          <div className='row'>
          <div className='col-md-6'>
                <h1>My Cart</h1>
                <div className='row'>
                  {cartItems.map((item) => (
                    <>
                       <div className='col-md-7'>
                        <h5>
                          {item.name}
                        </h5>
                        <h6>
                          {" "}
                          Price : {item.quantity} X {item.price} ={" "}
                          {item.priceTotal}
                        </h6>
    
                        <h6>
                          Quantity :&nbsp;
                          <FaMinusCircle
                            className="text-danger"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              dispatch(
                                addToCart(item, item.quantity - 1)
                              );
                            }}
                          />{" "}
                          &nbsp;
                          {item.quantity} &nbsp;
                          <FaPlusCircle
                            className="text-success"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              dispatch(
                                addToCart(item, item.quantity + 1)
                              );
                            }}
                          />
                        </h6>
                      </div>
                       <div className='col-md-5'>
                        <img
                          alt={item.name}
                          src={item.url}
                          style={{ width: "80px", height: "80px" }}
                        />
                         <FaTrash
                          className="text-danger"
                          style={{ cursor: "pointer", marginLeft: "20px" }}
                          onClick={() => {
                            dispatch(deleteFromCart(item));
                          }}
                        /> 
                      </div>
                    
                    </>
                  ))}
                </div>
              </div>
              <div className='col-md-4'>
                <h1>Payment Info</h1>
                <h4>Sub Total </h4>
                <h4>RS : {total} /-</h4>
                <Checkout total={total} />
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    };
export default CartScreen