import React from 'react'
import LOGIN from './components/CONNECT/LOGIN'
import SIGN_UP from './components/CONNECT/SIGN_UP'
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import { getProfile } from "./JS/action/actionUser";
import UserProfile from "./components/PROFILE_ADMIN/Profile"
import { useSelector, useDispatch } from "react-redux";
import AddProduct from "./components/PROFILE_ADMIN/AddProduct"
import AddOrder from "./components/PROFILE_ADMIN/ADDOrder"

function App() {
  const loading = useSelector((state) => state.reducerUser.loading);
  const isAuth = useSelector((state) => state.reducerUser.isAuth);
  const products = useSelector((state) => state.reducerProduct.products);

  const history = useHistory();


  const dispatch = useDispatch();

   const getUser = () => {
    dispatch(getProfile());
  };


  useEffect(() => {
    getUser();
  }, []); 


  

    return (
      <div className="inner">
      
        <Router>
          <Switch> 
            <Route exact path='/' component={LOGIN} />
            <Route path="/sign-in" component={LOGIN} />
            <Route path="/sign-up" component={SIGN_UP} />
            <Route exact path="/profile" render={() => ( <UserProfile />)} /> 
            <Route path="/ADD-Product" render={() => (<AddProduct />)}/>
            <Route path="/ADD-Order" render={() => (<AddOrder />)}/>
            </Switch>
          </Router>
        </div>
        
  
  
    )
}

export default App;
