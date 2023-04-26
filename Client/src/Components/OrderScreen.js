import React, { useEffect } from "react";
import { getUserOrders } from "../actions/OrderAction";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Loader from "./Loader";
import Error from "./Error";
import '../styles/orderStyle.css'
import Navbar from './Navbar';
import SubNavBar from "./SubNavBar";
import Footer from "./Footer";

const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <>
    <Navbar />
        <SubNavBar />
    <div className="ordermain">
        
      <h1 className="text-center ">Your Orders </h1>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {orders &&
        orders.map((order) => (
          <div className="container border border-dark" id="orders">
            <Row>
              <Col md={4}>
                <h3>Items :</h3>
                {order.orderItems.map((item) => (
                  <h4 key={item.name}>
                    {item.name}  {item.price} * {item.quantity} ={" "}
                    {item.priceTotal}
                  </h4>
                ))}
              </Col>
              <Col md={3}>
                <h3>Address :</h3>
                <h4>Street : {order.shippingAddress.street}</h4>
                <h4>City : {order.shippingAddress.city}</h4>
                <h4>PinCode : {order.shippingAddress.picode}</h4>
                <h4>Countery : {order.shippingAddress.country}</h4>
              </Col>
              <Col md={5}>
                <h3>Order Info :</h3>
                <h4>Order Amount : {order.orderAmount}</h4>
                <h4>Order id : {order._id}</h4>
              </Col>
            </Row>
          </div>
          
        ))}
        </div>
        <Footer />
    </>
  );
};

export default OrderScreen;