import React from "react";
import { CategoriesTab } from "../components/CategoriesTab";
import { CatalogProduct } from "../components/CatalogProduct";

export function Catalog(){
    return (
        <div id="catalog-section">
            <div id="catalog-container">
                <CategoriesTab/>
                <div className="catalog-products-container">
                    <CatalogProduct/>
                    <CatalogProduct/>
                    <CatalogProduct/>
                    <CatalogProduct/>
                    <CatalogProduct/>
                    <CatalogProduct/>
                    

                </div>
            </div>
        </div>
    )
}