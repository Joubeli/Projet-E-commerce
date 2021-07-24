import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './header.css'
import {registerUser} from '../../JS/action/actionUser'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import LOGIN from './LOGIN'


const SIGN_UP = () => {

     
    const loading = useSelector((state) => state. reducerUser.loading);
    const user= useSelector((state) => state. reducerUser.user);
    const errors= useSelector((state) => state. reducerUser.errors);
    

    
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

      };

      

    return loading ? (
        <div className='wait'>
        <h3>Please Wait </h3>
        <div className="loader">  
        </div>
        </div>
      ) :(
       
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
                    Already registered 
                    <Link to={"/sign-in"}>     log in?</Link>
                </p>
            </form>
         <div>
        </div>
        {!user ? Object.values(errors).map((el)=><p> {el.map((items)=><li>{items.msg}</li>)}</p>) : <p> {user.msg}</p> }
        </div>
        
     <Router>
        <Route exact path="/sign-in" component={LOGIN} />
        </Router>
         
        </div>
        




    )
         
}

export default SIGN_UP
