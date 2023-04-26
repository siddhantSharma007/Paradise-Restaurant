const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51MzNSdSAvmV5hCjoR73EbtFxEnEKnFW0tqDqNjDt2BM1AeWTmZ9hSVVqxi2RKmQesoGLQLz2iq6B0A6gEqw68EAH00UJK3gO6v"
);
const Order = require("../model/orderSchema");

router.post("/placeorder", async (req, res) => {
  const { token, total, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.paymentIntents.create(
      {
        amount: total * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        payment_method_types:customer.type
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: total,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          picode: token.card.address_zip,
        },
        // transectionId: payment.source.id,
      });
      newOrder.save();
      res.send("Payment Success");
    } else {
      res.send("Payment Faild");
    }
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

router.post("/getuserorder", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});


module.exports = router;