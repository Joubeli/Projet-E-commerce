import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../node_modules/font-awesome/css/font-awesome.min.css"
import "./profile.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Users from "./Users";
import Products from "./Products";
import Orders from "./Orders";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { getUsers } from '../../JS/action/actionUser'
import { getProduct } from '../../JS/action/actionProduct'
import { getOrder } from '../../JS/action/actionOrder'
import { useDispatch } from "react-redux"
import NAVBAR from "./NAVBAR"
import AddProduct from "./AddProduct"
import { Button, Form, FormControl } from 'react-bootstrap'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const UserProfile = () => {

  const isAuth = useSelector((state) => state.reducerUser.isAuth);
  const user = useSelector((state) => state.reducerUser.user)
  const products = useSelector(state => state.reducerProduct.products)
  const users = useSelector(state => state.reducerUser.users)
  const classes = useStyles();


  const logout = () => {
    {
      localStorage.clear();
      window.location.href = 'http://localhost:3000';
    }
  };

  const dispatch = useDispatch()

  //Users
  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  //Products
  const getAllProducts = () => {
    dispatch(getProduct())
  }

  useEffect(() => {
    getAllProducts()
  }, [])



  //Orders

  const getAllOrders = () => {
    dispatch(getOrder())
  }

  useEffect(() => {
    getAllOrders()
  }, [])




  if (!isAuth) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <div>
      <div className='account'>
        <div className='sidebar'>
          <div className='navbar_Admin'>
            <a href="#">
              <div className={classes.root}>
                <Avatar style={{ marginLeft: "35%", marginTop: "35%" }} alt="Remy Sharp" src="./admin2.png" className={classes.large} />
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15px"


              }}>
                <p class="lead" style={{ color: "white" }}> Administrator</p>
                <p class="lead" style={{ color: "white" }}> {user.fullName}</p>
                <p class="lead" style={{ color: "white" }}> {user.email}</p>
              </div>

            </a>
          </div>
          <nav className="nav">
            <ul>
              <li className="active"><a href="#users"><em className="fa fa-users"></em> Users </a></li>
              <li><a href="#orders"><em className="fa fa-shopping-basket"></em> Orders</a></li>
              <li><a href="#products"><em className="fa fa-shopping-cart"></em> Products</a></li>
              <li><a href="#" onClick={() => logout()}><em className="fa fa-sign-out"></em> Log Out</a></li>
            </ul>
          </nav>

        </div>
      </div>


      <NAVBAR />
      <div id="users" className="users">{users.map((el, i) => (
        <Users key={i} user={el} />))}
      </div>
      <div id="orders">
        <Orders />
      </div>
      <div id="products" className="products">{products.map((el, i) => (<Products key={i} product={el} />))}</div>
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search Users"
          className="mr-2"
          aria-label="Search"
          style={{width:"200px", marginLeft:"690px"}}

        />
        <Button class="btn btn-warning btn-lg" >Search</Button>
      </Form>

      <div style={{ marginLeft: "310px", marginTop: "50px" }}>
        <h1 class="display-1">List of Users </h1>
        <p class="lead">
          As an Admin y can delete any users that publish inappropriate content on your website
        </p>
      </div>
      <div id="users" className="users">{users.map((el, i) => (<Users key={i} user={el} />))}</div>


      <div style={{ marginLeft: "310px", marginTop: "50px" }}>
        <h1 class="display-1">List of Orders </h1>
        <p class="lead">
          As an Admin y can verify the order list
        </p>
      </div>


      <div id="orders" className="users">{orders.map((el, i) => (<Orders key={i} order={el} />))}</div>


      <div style={{ marginLeft: "310px", marginTop: "50px" }}>
        <h1 class="display-1">List of Products</h1>
        <p class="lead">
          As an Admin y can verify the Product list and delete inappropriate content
        </p>
      </div>

      <div id="products" className="users">{products.map((el, i) => (<Products key={i} product={el} />))}</div>

    </div>
  )
};

export default UserProfile;




