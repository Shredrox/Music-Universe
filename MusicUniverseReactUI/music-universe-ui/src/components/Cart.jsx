import React from "react";
import { CartProduct } from "./CartProduct";

export function Cart({products}){

    const productsInCart = products.filter((product) => product.inCart);
    console.log(productsInCart);

    return (
        <div>
            {productsInCart.map((product) => 
                <CartProduct key={product.id} product={product}/>
            )}
        </div>
    )
}