import axios from "axios";

export const placeOrderActions = ( token, cartTotal ) => async (dispatch, getState) => {
   
    dispatch({ type : "PLACE_ORDER_REQUEST" });

    const cartItems = getState().cartReducer.cartItems;
    const currentUser = getState().loginUserReducer.currentUser;

    try {
        const response = await axios.post("/api/orders/placeorder", { token, cartTotal, cartItems, currentUser });
        
        dispatch({ type : "PLACE_ORDER_SUCCESS" });

        console.log(response);
    } 
    catch (error) {
        console.log(error);
        dispatch({ type : "PLACE_ORDER_FAILED" });
    }

}