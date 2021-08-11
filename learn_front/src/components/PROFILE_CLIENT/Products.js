import React, {useEffect} from 'react'
import "./Profile.css"
import { Form } from "react-bootstrap"
import Product from "./Product"
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../../JS/action/actionProduct'

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
        <div className="products" >
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
            </div>
        </div>            
    )
}


export default Products;
