import React from 'react'
import LOGIN from './components/CONNECT/LOGIN'
import SIGN_UP from './components/CONNECT/SIGN_UP'
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import { getProfile } from "./JS/action/actionUser";
import UserProfile from "./components/PROFILE_ADMIN/Profile"
import { useSelector, useDispatch } from "react-redux";

function App() {
  const loading = useSelector((state) => state.reducerUser.loading);
  const user = useSelector((state) => state.reducerUser.user);
  const isAuth = useSelector((state) => state.reducerUser.isAuth);

  const history = useHistory();

  

  const dispatch = useDispatch();

  const getUser = () => {
    dispatch(getProfile());
  };

  useEffect(() => {
    getUser();
  }, [isAuth]);

    return (
      <div className="inner">
      
        <Router>
          <Switch>
             
            <Route exact path='/' component={LOGIN} />
            <Route path="/sign-in" component={LOGIN} />
            <Route path="/sign-up" component={SIGN_UP} />
            <Route exact path="/profile" render={() => ( <UserProfile />)} /> 
          </Switch>
          </Router>
        </div>
        
  
  
    )
}

export default App;
