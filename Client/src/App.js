import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Forgot from './Components/Forgot';
import Contact from './Components/Contact';
import ControlledCarousel from './Components/ControlledCarousel';
import CartData from './Components/CartData';
import CartScreen from './Components/CartScreen';
import OrderScreen from './Components/OrderScreen'


function App() {
  return (
    <>
    <div className="App">
     <Router>
        <Routes>
        <Route exact path="/login" element={ <Login />}>
          </Route>
          <Route exact path="/OrderScreen" element={ <OrderScreen />}>
          </Route>
          <Route exact path="/imgslider" element={ <ControlledCarousel />}>
          </Route>
          <Route exact path="/" element={<Home />} >
          </Route>
          <Route exact path="/cartData" element={<CartData/>} >
          </Route>
          <Route exact path="/CartScreen" element={<CartScreen/>} >
          </Route>
          <Route exact path="/SignUp" element={ <SignUp />} >
          </Route>
          <Route exact path="/Forgot" element={ <Forgot />} >
          </Route>
          <Route exact path="/contact" element={ <Contact />} >
          </Route>
      </Routes>
      </Router>
    </div>
    
     </>
  );
}

export default App;
