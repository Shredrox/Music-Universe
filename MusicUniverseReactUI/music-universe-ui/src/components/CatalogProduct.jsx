import React from "react";
import { useNavigate } from "react-router-dom";

export function CatalogProduct({product, toggleCart}){
    const navigate = useNavigate(); 

    function stopPropagation(e) {
        e.stopPropagation();
    }

    return (
        <div onClick={() => {navigate(`/product/${product.id}`) }} className="catalog-product">
            <div className="product">
                <img className="featuredProductImg" src={product.image} alt="aaa" />
            </div>
            <p className="productName">
                {product.name}
            </p>
            <p className="productName">
                Price: ${product.price}
            </p>
            <button 
                className="catalog-cart-button" 
                onClick={(e) =>{stopPropagation(e); toggleCart(product.id, 1)} }>
                Add To Cart
            </button>
        </div>
    )
}