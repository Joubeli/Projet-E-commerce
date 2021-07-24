import React from "react"
import {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import './header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {userLogin} from '../../JS/action/actionUser'
import UserProfile  from "../PROFILE_ADMIN/Profile"

const LOGIN = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loading = useSelector((state) => state.reducerUser.loading);
    const isAuth = useSelector((state) => state.reducerUser.isAuth);
    const errors= useSelector((state) => state. reducerUser.errors);

    const dispatch = useDispatch();

    const login = () => {
        const loginCred = {
            email,
            password,
        };

        dispatch(userLogin(loginCred));
    };
    return isAuth ? (
        <Redirect to="./Profile" />
      ) :
     loading ? (
        <div className='wait'>
        <h3>Please Wait </h3>
        <div className="loader">  
        </div>
        </div>
      ) :(
       
        <div className='login'>
            <img className='img_login' src="./login1.png" alt="profile photo"></img>
            <div className='box_login'>
                <form>
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={ (e)=> setEmail(e.target.value)} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-info btn-block" onClick={()=>login()}>Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>

                
            <p> {errors.msg}</p>
            
            </div>
            <Router>
            <Route
          exact
          path="/Profile"
          render={() => (
            <UserProfile  />
          )}
        /></Router>
        </div>
    )
}

export default LOGIN
