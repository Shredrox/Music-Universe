import React from "react";
import { CartProduct } from "./CartProduct";

export function Cart({products, toggleCart}){

    const productsInCart = products.filter((product) => product.inCart);

    return (
        <div id="cart-container">
            <div id="cart-products">
                {productsInCart.map((product) => 
                    <CartProduct key={product.id} product={product} toggleCart={toggleCart}/>
                )}
            </div>
            <div id="cart-summary">
                Your Cart Bro
            </div>
        </div>
    )
}