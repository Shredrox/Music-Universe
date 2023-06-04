import React from "react";

export function ProductCard({product}){
    return (
        <div className="productCard">
            <div className="product">
                <img className="featuredProductImg" src={product.image} alt="" />
            </div>
            <p className="productName">
                {product.name}
            </p>
        </div>
    )
}