import axios from 'axios';

export const registerUser = (user) => async dispatch => {
  
    dispatch({type: "USER_REGISTER_REQUEST"});

    try {
        const response = await axios.post("/api/user/register" , user);
        console.log(response.data);
        window.location.href='/login'
        // if(response.status === 200) {
        //     alert("congrats! user registered successfully 🎊🎊")
        // }

        dispatch({type: "USER_REGISTER_SUCCESS", payload: response.data});
    } 
    catch (error) {
        dispatch({ type: "USER_REGISTER_FAILED", payload: error });
    }

}


//login user

export const loginUser = (user) => async dispatch => {

    dispatch({type: "USER_LOGIN_REQUEST"});

     try {
        const response = await axios.post("/api/user/login" , user);
        console.log(response.data);
        window.location.href = "/"
        dispatch({type: "USER_LOGIN_SUCCESS", payload: response.data});
        localStorage.setItem('currentUser' , JSON.stringify(response.data));
        

        // if(response.status === 200) {
        //     alert("User Login Success")
        // }
    } 
    catch (error) {
        dispatch({ type: "USER_LOGIN_FAILED" , payload: error})
    }

}


// Logout user

export const logoutUser = () => dispatch => {

    dispatch({type: "LOGOUT_SUCCESS"});

    localStorage.removeItem("currentUser");

    window.location.href = "/login"

}