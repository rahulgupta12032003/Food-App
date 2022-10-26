import {combineReducers} from "redux";

import {legacy_createStore as createStore , applyMiddleware} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { foodsReducers } from "./Reducer/FoodsReducer";
import { cartReducer } from "./Reducer/CartReducer";
import { loginUserReducer, registerUserReducer } from "./Reducer/userReducer";

const finalReducer = combineReducers({
    foodsReducers : foodsReducers,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer
});

const cartData = localStorage.getItem("cartFoods") ? JSON.parse(localStorage.getItem("cartFoods")) : [];
const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;

const initialState = {
    cartReducer : {
        cartItems : cartData,    //  the key should always be same as in cartReducer that is cartItems
    },
    loginUserReducer : {
        currentUser : currentUser
    }
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk))); 

export default store;