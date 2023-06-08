import React, { useState, useEffect } from 'react'

export function SearchBar({setFilteredProducts}){
    const [input, setInput] = useState("");
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

    function filterProducts(value){
        const results = products.filter((product) => {
            return value && product.name.toLowerCase().includes(value)
        });

        setFilteredProducts(results);
    }

    function changeInput(value){
        setInput(value);
        filterProducts(value);
    }

    return (
        <input value={input} onChange={(e) => changeInput(e.target.value)} className="searchBar" type="text" placeholder="Search.."/>
    )
}
