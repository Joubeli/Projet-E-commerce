import axios from 'axios'
import {
    GET_USER,
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    USER_LOGIN,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS,
    USER_REGISTER,
    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCESS,
  }  from '../constants/actionType'


export const registerUser = (newUser) => async (dispatch) => {
    dispatch({ type: USER_REGISTER });
  
    try {
      const res = await axios.post("/user/register", newUser);
  
      console.log(res);
  
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);
  
      dispatch({ type: USER_REGISTER_FAILED, payload: error.response.data });
    }
  };


