import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/OrderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
const Checkout = ({ total }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, total));
    console.log(token);
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      <StripeCheckout
        amount={total * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MzNSdSAvmV5hCjobX6kuJJnDKopS7Sg8UTkrDLhlvTo6qtFUlfDsb8bmHIuzdtGLBkbwEuhwHZwcCNduJ0lNitS009kk74pwK"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
}; 

export default Checkout