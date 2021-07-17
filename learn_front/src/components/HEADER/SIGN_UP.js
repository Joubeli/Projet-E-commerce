import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './header.css'
import {registerUser} from '../../JS/action/actionUser'


const SIGN_UP = () => {

    const[newUser, setnewUser] = useState({
        fullName: "",
        email:"",
        password:""
    })

    const dispatch = useDispatch()

    const handleChange=(e)=>{
        setnewUser({...newUser, [e.target.name]: e.target.value})
    }


    return (
        <div className='login'>
        <img className='img_register' src="./register.jpg"></img>
        <div className='box_login'>
           <form>
                <h3>Register</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" name="fullName" value={newUser.fullName} onChange={handleChange} placeholder="First name" />
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={newUser.email} onChange={handleChange} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  name="password" value={newUser.password} onChange={handleChange} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-light btn-block" onClick={dispatch(registerUser(newUser))}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
         <div>
        </div>
        </div>
        </div>
    )
}

export default SIGN_UP
