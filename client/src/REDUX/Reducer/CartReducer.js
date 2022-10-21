// const cartData = localStorage.getItem("cartFoods") ? JSON.parse(localStorage.getItem("cartFoods")) : [];

export const cartReducer = (state={ cartItems: [] }, action) => {

    switch(action.type) {
        case "ADD_TO_CART" : 
            const alreadyExist = state.cartItems.find((elem) => elem._id === action.payload._id);
            // console.log(alreadyExist);
            if(alreadyExist) 
            {
               return {
                 ...state,
                 cartItems: state.cartItems.map((elem) => elem._id === action.payload._id ? action.payload : elem )
               }
            }

            return{
                ...state,
                cartItems : [...state.cartItems , action.payload]
            }

        case "DELETE_FROM_CART" : 
            return {
                ...state,
                cartItems: state.cartItems.filter((elem) => elem._id !== action.payload._id )
            }
            
        default : return state;
    }

}