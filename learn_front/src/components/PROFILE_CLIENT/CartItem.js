import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Profile.css";

const CartItem = ({ item }) => {
  return (
    <div className="cartItem" >
      {console.log(item)}
      <div className="item-img">
        <img src={item.image} alt="item" />
      </div>
      <div className="item-desc">{item.description}</div>
      <div className="item-price">{item.price}</div>
      <div className="item-qty">{item.qty}</div>
      <div className="item-delete"><em className="fa fa-trash"></em></div>      
    </div>
  );
};

export default CartItem;
