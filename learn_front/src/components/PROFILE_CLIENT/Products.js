import React, {useEffect} from 'react'
import "./Profile.css"
import { Form } from "react-bootstrap"
import Product from "./Product"
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../JS/action/actionProduct'
// import prod1 from "../../img/prod1.webp"
// import prod2 from "../../img/prod1.webp"
// import prod3 from "../../img/prod1.webp"
// import prod4 from "../../img/prod1.webp"

const Products = () => {

    const products = useSelector((state) => state.reducerProduct.products)
    const dispatch = useDispatch()
    //Products
    const getAllProducts = () => {
        dispatch(getProduct())
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <div className="products">
            <div className="products_header">
                <h1 className="section_title">Products</h1>                
                <div className="icons">
                    <Form.Control className="search_bar" size="sm" type="text" placeholder="Search Products"/>
                </div>
            </div>
            <hr style={{color:"gray", marginTop:"1%"}} />
            <div className="products_list">      
            <div className="box">
                    <div id="products" className="products">{products.map((el, i) => (<Product key={i} product={el} />))}</div>
            </div>
                 {/* <div className="box">                   
                    <div className="img_box"><img src={prod1} alt="" /></div>
                    <p className="desc">pull en vert</p>
                    <p className="desc price">80.00 DT</p>
                    <button className="button">Add To Cart</button>                  
                </div>   
                 <div className="box">                   
                    <div className="img_box"><img src={prod2} alt="" /></div>
                    <p className="desc">pull en vert</p>
                    <p className="desc price">80.00 DT</p>
                    <button className="button">Add To Cart</button>                  
                </div>   
                 <div className="box">                   
                    <div className="img_box"><img src={prod3} alt="" /></div>
                    <p className="desc">pull en vert</p>
                    <p className="desc price">80.00 DT</p>
                    <button className="button">Add To Cart</button>                  
                </div>   
                 <div className="box">                   
                    <div className="img_box"><img src={prod4} alt="" /></div>
                    <p className="desc">pull en vert</p>
                    <p className="desc price">80.00 DT</p>
                    <button className="button">Add To Cart</button>                  
                </div>    */}


            </div>
            </div>            
    )
}


export default Products;
