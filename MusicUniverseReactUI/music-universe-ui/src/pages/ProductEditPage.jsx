import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const ProductEditPage = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");

    const location = useLocation();
    const productId = location.pathname.split("/")[3];

    const navigate = useNavigate();

    const fetchProduct = async (id) => {
        console.log(productId);
      const result = await fetch(`http://localhost:5000/products/${productId}`);
      const data = await result.json();
      return data;
    }

    const getProduct = async () => {
      const product = await fetchProduct();

      setProduct(product);
      setName(product.name);
      setDescription(product.description);
      setCategory(product.category);
      setPrice(product.price);
      setIsLoading(false);
    }

    useEffect(() => {
      getProduct();
    }, [])

    async function submitChanges(){
        const updatedProduct = { ...product, 
            name: name,
            description: description,
            category: category,
            price: price
        };

        const result = await fetch(`http://localhost:5000/products/${productId}`, {
            method: "PUT", 
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });

        navigate(`/product/${product.id}`);
    }

    if(isLoading) return 'loading'

    return (
        <div className='product-edit-container'>
            <img className='featuredProductImg' src={product.image} alt="" />
            <input value={name} onChange={(e) => setName(e.target.value)} className="searchBar" type="text"/>
            <input value={description} onChange={(e) => setDescription(e.target.value)} className="searchBar" type="text"/>
            <input value={category} onChange={(e) => setCategory(e.target.value)} className="searchBar" type="text"/>
            <input value={price} onChange={(e) => setPrice(e.target.value)} className="searchBar" type="text"/>
            <button onClick={submitChanges} className='glow-on-hover'>Submit</button>
        </div>
    )
}
