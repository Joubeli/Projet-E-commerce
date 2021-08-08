import React from "react"
import "./Profile.css"
import {addProduct} from "../../JS/action/actionProduct"
import {useSelector, useDispatch} from "react-redux"
import {useState} from 'react'
import { Modal, Form  } from "react-bootstrap"


const AddProduct=()=>{
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

        setDescription('')
        setPrice('')
        setQte('')
        setCategory('')
        setImage('')

        dispatch(addProduct(newProd))
       
       
    }

    return(

    <div>
                
    <button className="button add-product" onClick={handleShow}>
        Add Product
    </button> 

    <Modal className="modal" show={show} onHide={handleClose} animation={true}>
        <Modal.Header>
            <Modal.Title className="modal_title">Add A Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
            <Form action="/product/upload" method="POST" encType="multipart/form-data">
                    <Form.Label className="modal_labels">Description</Form.Label>
                    <Form.Control className="modal_input" onChange={(e) => setDescription(e.target.value)} type="text" name="description" value={description}/>
                <br />
                    <Form.Label className="modal_labels">Price</Form.Label>       
                    <Form.Control className="modal_input"  onChange={(e) => setPrice(e.target.value)} type="text" name="price" value={price} name="price" id="price" />
                <br />
                    <Form.Label className="modal_labels">Quantity</Form.Label>
                    <Form.Control className="modal_input"  onChange={(e) => setQte(e.target.value)} type="text" value={qte} name="qte" id="qte" />
                <br />                    
                    <Form.Label className="modal_labels">Category</Form.Label>
                    <Form.Control className="modal_input"  onChange={(e) => setCategory(e.target.value)} type="text" value={category} name="category" id="category" />
                    <br />                    

                <input
                    type="file"
                    className="custom-file-input"
                    name="image"
                    id="input-files"
                    onChange={(e)=> setImage(e.target.value)}
                />
            </Form>
            </Modal.Body>  
            <Modal.Footer className="modal_footer">
                <button type="submit" className="button" onClick={()=> addProd()}>Add</button>
                {/* <button type="submit" className="button" onClick={()=> dispatch(addProd())}>Add</button> */}
                <button className="button" onClick={handleClose} >Close</button>
            </Modal.Footer>
    </Modal>
    </div>
 
   
 
        
      

    )
}

export default AddProduct;