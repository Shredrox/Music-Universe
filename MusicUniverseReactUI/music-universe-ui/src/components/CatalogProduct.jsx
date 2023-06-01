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
            <button className="nav-button" onClick={() => toggleCart(product.id)}>
                {product.inCart ? "Remove To Cart" : "Add To Cart" }
            </button>
        </div>
    )
}