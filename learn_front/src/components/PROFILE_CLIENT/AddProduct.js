import React from "react"
import {addProduct} from "../../JS/action/actionProduct"
import {useSelector, useDispatch} from "react-redux"
import {useState} from 'react'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'


const AddProduct=()=>{
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [qte, setQte] = useState("");;
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

  
 

    const dispatch = useDispatch()

    const addProd=(e)=>{
        const newProd={
            description,
            price,
            qte,
            category,
            image
        };

        dispatch(addProduct(newProd))
       
       
    }

    return(

    <div>

    <h1>Upload Product</h1>
 
    <div>
        <form action="/product/upload" method="POST" enctype="multipart/form-data">
            <div>
                <label for="description">Product Description</label>
                <input type="text" id="description" placeholder="Description"
                       name="description"  onChange={(e)=> setDescription(e.target.value)}  required />
            </div>

            <div>
                <label for="price">Product Price</label>
                <input type="text" id="price" placeholder="Price"
                       name="price"  onChange={(e)=> setPrice(e.target.value)} required />
            </div>
            <div>
                <label for="qte">Product Quantity</label>
                <input type="text" id="qte" placeholder="Price"
                       name="qte"  onChange={(e)=> setQte(e.target.value)} required />
            </div>
            <div>
                <label for="category">Product Category</label>
                <textarea id="category" name="category" rows="2"
                          placeholder="Category"  onChange={(e)=> setCategory(e.target.value)} required />
                
            </div>
            <div class="form-group">
              <input
                type="file"
                name="image"
                id="input-files"
                class="form-control-file border"
                onChange={(e)=> setImage(e.target.value)}
              />
            </div>
            <div>
                <button type="submit" onClick={()=> addProd()}>Submit</button>
            </div>
        </form>

       
     
    </div>
    </div>
 
   
 
        
      

    )
}

export default AddProduct;