import React from "react";
import { CategoriesTab } from "../components/CategoriesTab";
import { CatalogTab } from "../components/CatalogTab";
import { useState, useEffect } from "react";

export function Catalog({toggleCart}){
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const result = await fetch('http://localhost:5000/products/');
        const data = await result.json();
        
        return data;
    }
    
    const getProducts = async () => {
        const getProductsFromServer = await fetchProducts();
        setProducts(getProductsFromServer);
    }
    
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div id="catalog-section">
            <div id="catalog-container">
                <CategoriesTab/>
                <CatalogTab products={products} toggleCart={toggleCart}/>
            </div>
        </div>
    )
}