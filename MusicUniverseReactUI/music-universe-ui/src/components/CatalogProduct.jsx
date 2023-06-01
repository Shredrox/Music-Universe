import React from "react";

export function CatalogProduct({product, toggleCart}){
    return (
        <div className="catalog-product">
            <div className="product">
                <img className="featuredProductImg" src={product.image} alt="aaa" />
            </div>
            <p className="productName">
                {product.name}
            </p>
            <p className="productName">
                Price: {product.price}
            </p>
            <button 
                className={product.inCart ? "catalog-cart-button-remove" : "catalog-cart-button" } 
                onClick={() => toggleCart(product.id)}>
                {product.inCart ? "Remove From Cart" : "Add To Cart" }
            </button>
        </div>
    )
}