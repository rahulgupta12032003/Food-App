import axios from "axios";

export const getAllFoods = () => async dispatch =>{
    
    dispatch({type: "GET_FOODS_REQUEST"});

    try {
       const response = await axios.get("/api/foods/getfoods");
       console.log(response);
       dispatch({type: "GET_FOODS_SUCCESS", payload: response.data});
    }
    catch (err){
       dispatch({type: "GET_FOODS_FAILED" , payload: err})
       console.error(err);
    }

}