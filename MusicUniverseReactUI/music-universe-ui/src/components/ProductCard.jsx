import React from "react";
import { useNavigate } from "react-router-dom";

export function ProductCard({product}){
    const navigate = useNavigate();

    return (
        <div onClick={() => {navigate(`/product/${product.id}`) }} className="productCard">
            <div className="product">
                <img className="featuredProductImg" src={product.image} alt="" />
            </div>
            <p className="productName">
                {product.name}
            </p>
        </div>
    )
}