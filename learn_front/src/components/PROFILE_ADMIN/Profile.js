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
import {getProduct} from '../../JS/action/actionProduct'
import { useDispatch } from "react-redux"
import NAVBAR from "./NAVBAR"

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


  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  const getAllProducts = () => {
    dispatch(getProduct())
  }

  useEffect(() => {
    getAllProducts()
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
                <Avatar style={{ marginLeft: "35%", marginTop: "35%"}} alt="Remy Sharp" src="./admin.png" className={classes.large} />
              </div>
              <h4 className="admin">{user.fullName}</h4>
              <p className="admin">{user.email}</p>
              <p className="role">Administrator</p>
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
     

    </div>
  )
};

export default UserProfile;




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   small: {
//     width: theme.spacing(3),
//     height: theme.spacing(3),
//   },
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
// }));

// export default function ImageAvatars() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
//     </div>
//   );
// }
