import axios from 'axios'


import {ADD_ORDER,
    GET_ORDER} from '../constants/actionType'


export const addOrder =(newOrder)=> async(dispatch)=>{
    dispatch({type: ADD_ORDER})

    try{

        const res = await axios.post("/order/display", newOrder)
        dispatch({type: ADD_ORDER, payload:res.data})

    }

    catch(error){
        dispatch({type:ADD_ORDER, payload: error.response.data})

    }
};
