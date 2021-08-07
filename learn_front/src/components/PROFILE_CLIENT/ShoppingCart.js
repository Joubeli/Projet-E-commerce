import React from "react";
import "./Profile.css";
import banner from "../../img/category.jpg";
import { Table } from "react-bootstrap";
import cart1 from "../../img/cart1.png";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const ShoppingCart = () => {
  return (
    <div className="cart">
      <div
        style={{
          backgroundImage: `url(${banner})`,
          height: "300px",
          marginTop: "-3%",
        }}
        className="cart_banner"
      >
        <h1 className="shoppingCart section_title">Shopping Cart</h1>
      </div>
      <div className="products_list">
        <Table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <img
                  height="100px"
                  width="100px"
                  style={{ border: "1px #c6ccd5 solid" }}
                  src={cart1}
                  alt="cart1"
                />
              </td>
              <td>
                <h5 style={{paddingTop: "10%"}}>DT 360.00</h5>
              </td>
              <td>
                <div className="product_count" style={{height:"80px", width:"80px", display:"flex",borderRight:"1px solid #c6ccd5"}}>
                  <div className="product_number" style={{ width:"40px", height:"80px"}}>
                    <input
                      type="text"
                      className="input_number"
                      value="1"
                      min="0"
                      max="10"
                      style={{
                        border:"#c6ccd5 1px solid",
                        color:"#c6ccd5",
                        textAlign:"center",
                        width:"40px",
                        height:"80px"
                    }}

                    />
                  </div>
                  <div className="product_qty" style={{width:"40px", height:"80px", display:"flex", flexDirection:"column"}}>
                    <div className="input_number_decrement" style={{height:"50px", width:"38px", borderBottom: "1px solid #c6ccd5", borderTop: "1px solid #c6ccd5"}}>
                      <em className="fa fa-minus fa-xs" style={{color:"#c6ccd5", cursor:"pointer", textAlign:"center", marginLeft:"30%", marginTop:"40%"}}></em>
                    </div>
                    <div className="input_number_increment" style={{height:"40px", width:"40px", borderBottom: "1px solid #c6ccd5"}}>
                      <em className="fa fa-plus fa-xs"  style={{color:"#c6ccd5", cursor:"pointer", textAlign:"center", marginLeft:"30%", marginTop:"30%"}}></em>
                    </div>
                  </div>
                </div>
              </td>
              <td style={{paddingTop:"3%"}}>DT 360.00</td>
              <td><em className="fa fa-trash fa-lg"  style={{color:"#888888", cursor:"pointer", textAlign:"center", marginLeft:"30%", marginTop:"40%"}}></em></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ShoppingCart;
