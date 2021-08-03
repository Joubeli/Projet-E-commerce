import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className="Header">
            <h1 className="Logo">eFrip</h1>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Add Product</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            <div className="Search_bar">

            </div>
            <div className="Shopping_cart">

            </div>
            <div className="Sign_out">
                
            </div>
        </div>
    )
}

export default Header
