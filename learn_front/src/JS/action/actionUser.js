import axios from 'axios'
import {REGISTER_USER} from '../constants/actionType'


export const registerUser=(newUser)=>(dispatch)=>{
    axios.post('/users', newUser)
    .then(res => dispatch({ type: REGISTER_USER, payload: res.data }))
    .catch(err => console.log(err))

}


