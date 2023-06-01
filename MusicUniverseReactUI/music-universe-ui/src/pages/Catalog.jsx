import React from "react";
import { CategoriesTab } from "../components/CategoriesTab";
import { CatalogTab } from "../components/CatalogTab";

export function Catalog({products, toggleCart}){
    return (
        <div id="catalog-section">
            <div id="catalog-container">
                <CategoriesTab/>
                <CatalogTab products={products} toggleCart={toggleCart}/>
            </div>
        </div>
    )
}