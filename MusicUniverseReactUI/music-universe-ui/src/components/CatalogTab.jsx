import React from "react";
import { CatalogProduct } from "./CatalogProduct";

export function CatalogTab({products, toggleCart}){
    return (
        <div className="catalog-products-container">
            {products.map((product) => 
                <CatalogProduct key={product.id} product={product} toggleCart={toggleCart}/>
            )}
        </div>
    )
}