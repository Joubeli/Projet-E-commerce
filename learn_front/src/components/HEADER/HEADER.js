import React from 'react'
import LOGIN from './LOGIN'
import SIGN_UP from './SIGN_UP'
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import { getProfile } from "../../JS/action/actionUser";
import UserProfile from "../PROFILE_ADMIN/Profile"
import { useSelector, useDispatch } from "react-redux";


const HEADER = () => {
  const loading = useSelector((state) => state.reducerUser.loading);
  const user = useSelector((state) => state.reducerUser.user);
  const isAuth = useSelector((state) => state.reducerUser.isAuth);

  const history = useHistory();

  const logout = () => {
    {
      localStorage.clear();
      window.location.href = 'http://localhost:3000';
  }
  };

  const dispatch = useDispatch();

  const getUser = () => {
    dispatch(getProfile());
  };

  useEffect(() => {
    getUser();
  }, [isAuth]);

    return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>9ach-9achni.tn</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Register</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning btn-block" onClick={() => logout()}>Logout</button>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
      
   

        <div className="inner">
          <Switch>
            <Route exact path='/' component={LOGIN} />
            <Route path="/sign-in" component={LOGIN} />
            <Route path="/sign-up" component={SIGN_UP} />
            <Route exact path="/profile" render={() => ( <UserProfile />)}/>
          </Switch>
        </div>
        
    </div>
    </Router>

    )
}

export default HEADER
