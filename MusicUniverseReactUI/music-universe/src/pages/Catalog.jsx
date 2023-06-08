import React from "react";
import { CategoriesTab } from "../components/CategoriesTab";
import { CatalogTab } from "../components/CatalogTab";
import { useState, useEffect } from "react";

export function Catalog({toggleCart}){
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filterOn, setFilterOn] = useState(false);

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
                <CategoriesTab products={products} setFilteredProducts={setFilteredProducts} setFilterOn={setFilterOn}/>
                <CatalogTab products={products} filteredProducts={filteredProducts} toggleCart={toggleCart} filterOn={filterOn}/>
            </div>
        </div>
    )
}