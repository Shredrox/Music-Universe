import React from 'react'
import { useState } from 'react';

export const CartProduct = ({productId, product, productQuantity, toggleCart}) => {
  const [quantity, setQuantity] = useState(productQuantity);

  async function changeQuantity(sign){
    let newQuantity = quantity;

    if(sign === '+'){
      newQuantity++;
      setQuantity(quantity+1);
    }
    else if(sign === '-' && quantity > 1){
      newQuantity--;
      setQuantity(quantity-1);
    }
    else{
      return;
    }

    console.log(newQuantity);

    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if(user === null || user === undefined){
      return;
    }

    const updatedCart = user.cart.map((cartProduct) =>{
      if(cartProduct.productId == productId){
        return { ...cartProduct, quantity: newQuantity};
      }
      return cartProduct;
    })

    const updatedUser = {...user, cart: updatedCart};

    console.log(updatedUser);
    const result = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PUT", 
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    });

    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
  }

  return (
    <div className="cart-product-card">
      <div className="cart-product">
          <img className="featuredProductImg" src={product.image} alt="aaa" />
      </div>
      <p className="card-product-name">
          {product.name}
      </p>
      <p className="card-product-name">
          Price: ${product.price}
      </p>
      <p className="card-product-name">
          Quantity:
      </p>
      <div className="quantity-container">
          {quantity}
          <div className="quantity-buttons-container">
            <button onClick={() => { changeQuantity('+')}} className="quantity-button">+</button>
            <button onClick={() => { changeQuantity('-')}} className="quantity-button">-</button>
          </div>
      </div>
      <button className="cart-button" onClick={() => toggleCart(product.id)}>
          X
      </button>
    </div>
  )
}
