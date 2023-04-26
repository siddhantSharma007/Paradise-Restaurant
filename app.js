const express = require('express');
const dotenv=require('dotenv');
const app=express();
// const user=require('./Server/model/UserSchema')

dotenv.config({path: './config.env' });
const Port=process.env.PORT;
(require('./Server/Database/Database'))
app.use(express.json());

app.use(require('./Server/Router/Auth'));
app.use('/api/foods',require('./Server/Router/FoodRoute'));
app.use('/api/orders',require('./Server/Router/orderRoute'));

app.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.use("/api/users", require("./Server/Router/UserRoute"));

app.listen(4000,()=>{
    console.log(`server run on ${Port}`)
});