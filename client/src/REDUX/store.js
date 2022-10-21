import {combineReducers} from "redux";

import {legacy_createStore as createStore , applyMiddleware} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { foodsReducers } from "./Reducer/FoodsReducer";
import { cartReducer } from "./Reducer/CartReducer";

const finalReducer = combineReducers({
    foodsReducers : foodsReducers,
    cartReducer : cartReducer,
});

const cartData = localStorage.getItem("cartFoods") ? JSON.parse(localStorage.getItem("cartFoods")) : [];

const initialState = {
    cartReducer : {
        cartItems : cartData,    //  the key should always be same as in cartReducer that is cartItems
    }
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk))); 

export default store;