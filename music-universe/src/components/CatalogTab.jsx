import React from "react";
import { CatalogProduct } from "./CatalogProduct";

export function CatalogTab({products, filteredProducts, toggleCart, filterOn}){
    return (
        <div className="catalog-products-container">
            {filterOn ?
                filteredProducts.map((product) => 
                    <CatalogProduct key={product.id} product={product} toggleCart={toggleCart}/>
                )
                :
                products.map((product) => 
                    <CatalogProduct key={product.id} product={product} toggleCart={toggleCart}/>
                )
            } 
        </div>
    )
}