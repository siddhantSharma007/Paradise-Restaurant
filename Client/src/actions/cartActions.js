export const addToCart = (food, quantity) => (dispatch,getState) =>{
    var cartItem = {
      name: food.name,
      _id: food._id,
      url: food.url,
      price: food.price,
      quantity: Number(quantity),
      priceTotal: food.price * quantity
    };
    
    if (cartItem.quantity > 10) {
      alert("you Can only add 10 pizzas");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: food });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cartReducer.cartItems)
        );
      }
    }
  };
  
  export const deleteFromCart = (food) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: food });
    const cartItems = getState().cartReducer.cartitems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };