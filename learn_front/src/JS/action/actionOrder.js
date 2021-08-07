import axios from 'axios'


import {ADD_ORDER,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAILED, GET_ORDER} from '../constants/actionType'


export const addOrder =(newOrder)=> async(dispatch)=>{
    dispatch({type: ADD_ORDER})

    try{

        const res = await axios.post("/order/upload", newOrder)
        dispatch({type: ADD_ORDER_SUCCESS, payload:res.data})

    }

    catch(error){
        dispatch({type:ADD_ORDER_FAILED, payload: error.response.data})

    }
};

export const getOrder=()=> (dispatch)=>{

    axios.get('/order/display')
    .then(res=> dispatch({type:GET_ORDER, payload:res.data}))
    .catch(err=>console.log(err))
    
}