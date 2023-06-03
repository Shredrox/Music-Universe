import React from "react";
import { CartProduct } from "./CartProduct";
import cartIcon from '../assets/cartBtnIcon.png';

export function Cart({products, toggleCart}){

    const productsInCart = products.filter((product) => product.inCart);
    const totalPrice = productsInCart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div id="cart-container">
            <div id="cart-products">
                {productsInCart.map((product) => 
                    <CartProduct key={product.id} product={product} toggleCart={toggleCart}/>
                )}
            </div>
            <div id="cart-summary">
                <span>Your Cart<img src={cartIcon} alt="" /></span> 
                <label>Total Price: ${totalPrice}</label>
                <button className="nav-button">Checkout</button>
            </div>
        </div>
    )
}