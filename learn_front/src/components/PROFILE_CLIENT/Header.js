import {React, useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const Header = () => {

    const cart = useSelector((state) => state.reducerShop.cart)
    const user = useSelector((state) => state.reducerUser.user)

    const [cartCount, setCartCount] = useState(0)

    const logout = () => {
        {
          localStorage.clear();
          window.location.href = 'http://localhost:3000';
        }
      };

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count =+ item.qty;
        });
        setCartCount(count)
    }, [cart, cartCount])

    return (            
        <div className="Header">

            <Link to="/client">
                <a className="Logo">
                    eShop.tn
                </a>
            </Link>

            <nav>
                <ul className="navbar_items">
                    <Link to="/client"><li>Home</li></Link>
                    <Link to="/client/products"><li><a href="#products">Products</a></li></Link>
                    <Link to="/client/shopping_cart"><li>Shopping Cart</li></Link>
                    <Link to="/client/contact"><li>Contact</li></Link>
                </ul>
            </nav>

            <div className="shopCart">
                <Link to="/client/shopping_cart">
                    <div className="icon_circle">
                        <a className="icon">
                            <em className="fa fa-shopping-cart"></em>
                        </a>
                    </div>
                </Link>
                <div className="cartCount">{ cartCount }</div>
            </div>
            <Link to="/client/add-product"><button className="button">Add Product</button></Link>

            <button className="button" onClick={() => logout()}>Sign Out</button>

            <span  className="username" >
              <p> {user.fullName}  : {user.email}</p>
            </span>
            

        </div>        
    )
}

export default Header