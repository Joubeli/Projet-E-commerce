import React from "react"
import {addOrder} from "../../JS/action/actionOrder"
import {useSelector, useDispatch} from "react-redux"
import {useState} from 'react'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'


const AddOrder=()=>{
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState("");
    const [date, setDate] = useState("");;
    const [mod_liv, setMod_liv] = useState("");

    const dispatch = useDispatch()

    const addOrd=(e)=>{
        const newOrd={
            description,
            product,
            date,
            mod_liv
        };

        dispatch(addOrder(newOrd))
       
       
    }

    return(

    <div>

    <h1>Add Order</h1>
 
    <div>
        <form action="/order/upload" method="POST" enctype="multipart/form-data">
            <div>
                <label for="description">Order Description</label>
                <input type="text" id="description" placeholder="Description"
                       name="description"  onChange={(e)=> setDescription(e.target.value)}  required />
            </div>

            <div>
                <label for="product">Product </label>
                <input type="text" id="product" placeholder="Product"
                       name="product"  onChange={(e)=> setProduct(e.target.value)} required />
            </div>
            <div>
                <label for="date">Date</label>
                <input type="text" id="date" placeholder="Date"
                       name="date"  onChange={(e)=> setDate(e.target.value)} required />
            </div>
            <div>
                <label for="mod_liv">Product Category</label>
                <textarea id="mod_liv" name="mod_liv" rows="2"
                          placeholder="mod_liv"  onChange={(e)=> setMod_liv(e.target.value)} required />
                
            </div>
           
            <div>
                <button type="submit" onClick={()=> addOrd()}>Submit</button>
            </div>
        </form>

       
     
    </div>
    </div>
 
   
 
        
      

    )
}

export default AddOrder;