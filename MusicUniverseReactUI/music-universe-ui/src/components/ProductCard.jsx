import React from "react";
import featuredProductImage from '../assets/mishaGuitar.png';

export function ProductCard(){
    return (
        <div className="productCard">
            <div className="product">
                <img className="featuredProductImg" src={featuredProductImage} alt="" />
            </div>
            <p className="productName">
                Guitar 1
            </p>
        </div>
    )
}