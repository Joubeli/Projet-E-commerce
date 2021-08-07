import React from 'react'
import { Link } from "react-router-dom"
import { Form } from "react-bootstrap"

const Header = () => {
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
                <Link to="/client/shopping_cart">
                    <div className="icon_circle">
                        <a className="icon"><em className="fa fa-shopping-cart"></em></a>
                    </div>
                </Link>
                <div className="icons">
                    <Form.Control className="search_bar" size="sm" type="text" placeholder="Search Products"/>
                </div>
                <span className="username">
                    Hi, Imen
                </span>   
            </div>        
    )
}

export default Header
