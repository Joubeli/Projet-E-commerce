import React from 'react'
import LOGIN from './components/CONNECT/LOGIN'
import SIGN_UP from './components/CONNECT/SIGN_UP'
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import { getProfile } from "./JS/action/actionUser";
import UserProfile from "./components/PROFILE_ADMIN/Profile"
import { useSelector, useDispatch } from "react-redux";
import AddProduct from "./components/PROFILE_CLIENT/AddProduct"
import Profile from "./components/PROFILE_CLIENT/Profile"
import ShoppingCart from "./components/PROFILE_CLIENT/ShoppingCart"
import Header from './components/PROFILE_CLIENT/Header'
import Footer from './components/PROFILE_CLIENT/Footer'
import Contact from './components/PROFILE_CLIENT/Contact'
import Products from './components/PROFILE_CLIENT/Products'


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
            <Route exact path='/' component={LOGIN} />
            <Route path="/sign-in" component={LOGIN} />
            <Route path="/sign-up" component={SIGN_UP} />
            <Route exact path="/profile" render={() => ( <UserProfile />)} /> 
            <Route  path="/client" render={() => ( <Header />)} /> 
            {/* <Route exact  path="/client" render={() => (<Profile />)} />
            <Route  path="/client" render={() => ( <Footer />)} /> 
            <Route  path="/client" render={() => (<AddProduct />)}/>
            <Route exact   path="/client/products" render={() => (<Products />)}/>
            <Route exact   path="/client/contact" render={() => (<Contact />)}/>
            <Route exact  path="/client/shopping_cart" render={() => (<ShoppingCart />)}/> */}
        </Router>
        </div>
        
  
  
    )
}

export default App;
