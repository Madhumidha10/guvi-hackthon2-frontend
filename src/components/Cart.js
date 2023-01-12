import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./App";
import { isAuthenticated } from "./helpers/auth";
import { deleteFromCart, getCart, setLocalStorage } from "./helpers/localStorage";


const Cart = ({ history }) => {
  const {cart,setCart}=useContext(CartContext)
    useEffect(() => {
    setCart(getCart());
    console.log(cart)
    
  }, []);
  const handleGoBackBtn = () => {
    history.goBack();
  };

  const handleQtyChange = (e, equipment) => {

    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  
    cart.forEach((cartItem) => {
      if (cartItem._id === equipment._id) {
        cartItem.count = e.target.value;
      }
    });
  
     localStorage.setItem("cart", JSON.stringify(cart));
     setCart(getCart())
    
  };

  const handleStart= (val, equipment) => {

    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  
    cart.forEach((cartItem) => {
      if (cartItem._id === equipment._id) {
        cartItem.startDate = val;
       
      }
    });
  
     localStorage.setItem("cart", JSON.stringify(cart));
     setCart(getCart())
    
  };

  
  const handleEnd= (val, equipment) => {

    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  
    cart.forEach((cartItem) => {
      if (cartItem._id === equipment._id) {
        cartItem.endDate = val;
    
      }
    });
  
     localStorage.setItem("cart", JSON.stringify(cart));
     setCart(getCart())
    
  };
  const handleCheckout = (evt) => {
    if (isAuthenticated()) {
      history.push("/shipping");
    } else {
      history.push("/signin?redirect=shipping");
    }
  }

  const noOfDays=(startDate,endDate)=>{
    let difference = endDate.getTime()-startDate.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
       return TotalDays;
  }
  const startDate=()=>{
    var date = new Date();
    var dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    var currentDate = date.toLocaleDateString('ja-JP', dateOptions).replace(/\//gi, '-');
    return currentDate;
  }
  const endDate=()=>{
    var date = new Date();
    date.setDate(date.getDate() + 1)
    var dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    var currentDate = date.toLocaleDateString('ja-JP', dateOptions).replace(/\//gi, '-');
    
    return currentDate
  }
  return (
    <section className="cart-page m-4">
      {cart.length <= 0 ? (
        <div className="jumbotron">
          <h1 className="display-4">
            Your cart is empty{" "}
            <button
              className="btn btn-light text-primary ml-4"
              onClick={handleGoBackBtn}
            >
              Go Back
            </button>
          </h1>
        </div>
      ) : (
        <>
          <div className="jumbotron">
            <h1 className="display-4">Cart</h1>
          </div>
          <div className="row">
            <div className="col-md-8 table-responsive">

              <table className="table" >
                <thead>
                  <tr>
                    <th scope="col" class=""></th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Price</th>
                    <th scope="col">Select Dates</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((equipment) => (
                    <tr key={equipment._id}>
                      <th scope="row">
                        {" "}
                        <img
                          style={{
                            maxWidth: "110px",
                          }}
                          className="img-fluid w-100 img-thumbnail"
                          src={`/uploads/${equipment.fileName}`}
                          alt="equipment"
                        />
                      </th>
                      <td>
                        {" "}
                        <Link to={`/equipment/${equipment._id}`}>
                          {equipment.equipmentName}
                        </Link>
                      </td>
                      <td>
                        {" "}
                        {equipment.equipmentPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </td>
                      <td >
                       <input type="date" placeHolder="Start date"  value={!equipment.startDate?handleStart(startDate(),equipment):equipment.startDate} onChange={(e)=>handleStart(e.target.value,equipment)}/>
            <input type="date" placeholder="End date"  value={!equipment.endDate?handleEnd(endDate(),equipment):equipment.endDate} onChange={(e)=>handleEnd(e.target.value,equipment)} />
                    {`${noOfDays(new Date(equipment.startDate),new Date(equipment.endDate))*24} Hrs (${noOfDays(new Date(equipment.startDate),new Date(equipment.endDate))} Days)`} 
                 
               </td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          max={equipment.equipmentQty}
                          value={equipment.count}
                          
                            onChange={(e) => handleQtyChange(e, equipment)}
                        />
                      </td>
                      <td>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => {deleteFromCart(equipment);setCart(getCart())}}
                        >
                          <i className="far fa-trash-alt pr-1"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-4 border-left pl-4">
              <h2>Cart Summary</h2>
              <p className="font-weight-light text-muted border-bottom">
                {cart.length === 1 ? "(1) Item" : `(${cart.length}) Items`}
              </p>
              <p className="font-weight-bold">
                Total: ₹
                {cart
                  .reduce(
                    (currentSum, currentCartItem) =>
                      currentSum +
                      currentCartItem.count * currentCartItem.equipmentPrice*noOfDays(new Date(currentCartItem.startDate),new Date(currentCartItem.endDate)),
                    0
                  )
                  .toFixed(2)}

              </p>
              
              <button
                className="btn btn-dark btn-large btn-block mb-5 py-2"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}


     
    </section>
  );
                  
};

export default Cart;
