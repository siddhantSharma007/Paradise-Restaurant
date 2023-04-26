import {combineReducers,applyMiddleware} from 'redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import {registerUserReducer,loginUserReducer} from '../src/reducers/userReducer'
import { getAllFoodReducer } from './reducers/FoodReducer'
import {composeWithDevTools} from 'redux-devtools-extension';
import { cartReducer } from './reducers/CartReducer';
import {placeOrderReducer} from './reducers/orderReducer'
import { getUserOrdersReducer } from './reducers/orderReducer'

const currentUser = 
localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const finalReducer=combineReducers({
    getAllFoodReducer:getAllFoodReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer
})


const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


const initialState={
    cartReducer:{
        cartItems:cartItems
        
    },
    loginUserReducer: {
        currentUser: currentUser,
      },
    };
const composeEnhancers=composeWithDevTools({})

const store=createStore (
    finalReducer,
    initialState,
   composeEnhancers(applyMiddleware(thunk))
);

export default store;