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
  } from "../constants/actionType";
  
  const initialState = {
    loading: false,
    isAuth: false,
    user: {},
    errors:{}
  };
  
  const reducerUser = (state = initialState, { type, payload }) => {
    switch (type) {
      case USER_REGISTER:
      case USER_LOGIN:
      case GET_USER:
        return {
          ...state,
          loading: true,
        };
  
      case USER_REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: payload,
        };
      case GET_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: payload,
          isAuth: true,
        };
  
      case USER_REGISTER_FAILED:
      case USER_LOGIN_FAILED:
      case GET_USER_FAILED:
        return {
          ...state,
          loading: false,
          errors: payload,
          isAuth: false,
        };
  
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          token: payload.token,
          isAuth: true,
        };
  
        default: return state
    }
  };
  
  export default reducerUser;
  