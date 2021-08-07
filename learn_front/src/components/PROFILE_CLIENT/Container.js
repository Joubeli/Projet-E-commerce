import React from 'react'
import "./Profile.css"
import { Link } from "react-router-dom"
import contact from "../../img/contact_background.png.webp"
import img from "../../img/home.webp"

const Container = () => {
    return (
        <div className="Container">
            <div className="banner">            
                <img className="img" src={img} alt="banner"/>
                <div className="discount_release">
                    <h5 className="percentage">60% Discount</h5>
                    <h1 className="collection">summer collection</h1>
                    <p className="best">Best Cloth Collection By 2021!</p>
                    <Link to="/client/products"><button className="shop_now button" >Shop Now</button></Link>
                </div>
            </div>
            <div className="latest">
                <div className="menu">
                    <h1 className="section_title"> Latest Products</h1>
                    <ul className="latest_menu">
                        <li style={{color: "#ff003c"}}>All</li>
                        <li>New</li>
                    </ul>
                </div>
                    <hr style={{color:"gray"}} />


            </div>
            <div className="best_products">

            </div>
            <div className="contact">
                <hr style={{color:"gray"}} />
                <div className="contact_section" style={{backgroundImage:`Url(${contact})`}}>
                    <p className="get_in_touch">
                        Get In Touch
                        <br/>
                        <span className="sent_us">Sent Us Your Suggestions</span>
                    </p>
                    <Link to="/client/contact"><button className="button">Contact Us</button></Link>
                </div>

            </div>
        </div>
    
    )
}

export default Container
