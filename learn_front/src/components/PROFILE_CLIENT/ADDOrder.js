import React from "react";
import { addOrder } from "../../JS/action/actionOrder";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./Profile.css";

const AddOrder = () => {
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState("");
  const [date, setDate] = useState("");
  const [mod_liv, setMod_liv] = useState("");

  const dispatch = useDispatch();

  const addOrd = (e) => {
    const newOrd = {
      description,
      product,
      date,
      mod_liv,
    };

    dispatch(addOrder(newOrd));
  };

  return (
    <div className="add-product" style={{height:"500px"}} >
      <form action="/order/upload" method="POST" enctype="multipart/form-data">
        <h1
          style={{
            fontSize: "2.3em",
            marginLeft: "16%",
            marginTop: "-7%",
            marginBottom: "1%",
          }}
          className="section_title"
        >
          Add Order
        </h1>
        <div className="form-group">
          <label
            for="exampleFormControlInput1"
            style={{ fontFamily: "'El Messiri', sans-serif", color: "#665492" }}
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={description}
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
              color:"#8f8f96"
            }}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label 
          for="exampleFormControlInput1"          
          style={{ fontFamily: "'El Messiri', sans-serif", color: "#665492" }}
          >
            Product </label>
          <input
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
              color:"#8f8f96"
            }}
            type="text"
            id="product"
            className="form-control"
            name="product"
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <div>
          <label
          for="exampleFormControlInput1"          
          style={{ fontFamily: "'El Messiri', sans-serif", color: "#665492" }}
          >Date
        </label>
          <input
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
              color:"#8f8f96"
            }}
            className="form-control"
            type="text"
            id="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label
          for="exampleFormControlInput1"          
          style={{ fontFamily: "'El Messiri', sans-serif", color: "#665492" }}
          >
              Delivery Mode
         </label>
          <select
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
              textAlign:"center",
              color:"#8f8f96"
            }}
            class="form-control" 
            id="exampleFormControlSelect1"            
            id="mod_liv"
            name="mod_liv"
            rows="2"
            placeholder="mod_liv"
            onChange={(e) => setMod_liv(e.target.value)}
            required>
                <option>Express Delivery</option>
                <option>Economical home delivery</option>
                <option>Delivery to a relay point</option>
            </select>
        </div>

        <div>
          <button className="button" style={{marginLeft:"30%", marginTop:"2%", width:"150px"}} type="submit" onClick={() => addOrd()}>
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrder;
