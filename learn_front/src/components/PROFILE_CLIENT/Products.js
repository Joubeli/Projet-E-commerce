import React from 'react'
import "./Profile.css"
import prod1 from "../../img/prod1.webp"
import prod2 from "../../img/prod2.webp"
import prod3 from "../../img/prod3.webp"
import prod4 from "../../img/prod4.webp"
import prod5 from "../../img/prod5.webp"
import prod6 from "../../img/prod6.webp"

const Products = () => {
    return (
        <div className="products">
            
                <h1 className="section_title">Products</h1>
                <hr style={{color:"gray"}} />
                <div className="products_list">
                    <div className="box">
                        <div className="img_box"><img src={prod1} /></div>
                        <p className="desc">Short with square pattern</p>
                        <p className="desc price">40.00 DT</p>
                        <button className="button">Add To Cart</button>
                    </div>              
                    <div className="box">
                    <div className="img_box"><img src={prod2} /></div>
                        <p className="desc">Green pullover</p>
                        <p className="desc price">58.00 DT</p>
                        <button className="button">Add To Cart</button>
                    </div>              
                    <div className="box">
                        <div className="img_box"><img src={prod3} /></div>
                        <p className="desc">Yellow pullover</p>
                        <p className="desc price">68.00 DT</p>
                        <button className="button">Add To Cart</button>
                    </div>                 
                    <div className="box">
                        <div className="img_box"><img src={prod4} /></div>
                        <p className="desc">Gray pullover</p>
                        <p className="desc price">55.00 DT</p>
                        <button className="button">Add To Cart</button>
                    </div>              
                    <div className="box">
                    <div className="img_box"><img src={prod5} /></div>
                        <p className="desc">Black trousers</p>
                        <p className="desc price">60.00 DT</p>
                        <button className="button">Add To Cart</button>
                    </div>              
                    <div className="box">
                        <div className="img_box"><img src={prod6} /></div>
                        <p className="desc">Denim blazer</p>
                        <p className="desc price">70.00 DT</p>
                        <button className="button">Add To Cart</button>
                    </div>                 
                </div>
            </div>            
    )
}

export default Products
