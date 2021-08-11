import React from 'react'
import "./Profile.css"
import { useDispatch } from 'react-redux'
import {addToCart} from "../../JS/action/actionShop"


const Product = ({productData}) => {

    const dispatch = useDispatch()

    const buffer = productData.image.data // e.g., <Buffer 89 50 4e ... >
    const b64 = new Buffer.from(buffer).toString('base64')
    const mimeType = 'image/png' // e.g., image/png

    return (
        <div className="products_list">
        <div className='box'>
            
                <div className="img_box"><img src={`data:${mimeType};base64,${b64}`}  alt="" /></div>
                <p className="desc">{productData.description}</p>
                <p className="desc price">{productData.price} DT</p>
                <button className="button" onClick={()=> dispatch(addToCart(productData.id))}>Add To Cart</button>
        </div>
        </div>
    )
}

export default Product
