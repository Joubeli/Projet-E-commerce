import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './header.css'
import {registerUser} from '../../JS/action/actionUser'


const SIGN_UP = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch=useDispatch()

    const register = () => {
        const newUser = {
          fullName,
          email,
          password,
        };
    
        dispatch(registerUser(newUser));
    
        setFullName("");
        setEmail("");
        setPassword("");
      };

    return (
        <div className='login'>
        <img className='img_register' src="./register.jpg"></img>
        <div className='box_login'>
           <form>
                <h3>Register</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control"  onChange={(e) => setFullName(e.target.value)} placeholder="First name" required/>
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeceholder="Enter password" required />
                </div>

                <button type="submit" className="btn btn-info btn-block" onClick= {()=>register()}>Register</button>
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
