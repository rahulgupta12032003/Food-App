export const addToCartActions = (foods, variant, quantity) => (dispatch, getState) => {
   
    const cartItems = {
        name : foods.name,
        _id : foods._id,
        image : foods.image,
        variant : variant,
        quantity : Number(quantity),
        prices : foods.prices,
        price : foods.prices[0][variant] * quantity,
    }

    if(cartItems.quantity > 10){
        alert("You cannot add more than 10 food of same type in cart")
    }
    else{
        if(cartItems.quantity < 1){
           dispatch({ type: "DELETE_FROM_CART", payload:foods });
        }
        else{
           dispatch({ type: "ADD_TO_CART", payload: cartItems });
        }
    }
    
    const cartData = getState().cartReducer.cartItems;
    localStorage.setItem("cartFoods", JSON.stringify(cartData));

}

// delete from cart 
export const deleteFromCart = (foods) => (dispatch, getState) => {
   
    dispatch({ type: "DELETE_FROM_CART", payload:foods });

    const cartData = getState().cartReducer.cartItems;
    localStorage.setItem("cartFoods", JSON.stringify(cartData));

}