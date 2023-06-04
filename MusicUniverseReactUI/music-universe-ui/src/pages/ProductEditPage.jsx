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
        <div className="product-edit-page">
            <div className='product-edit-container'>
                <img src={product.image} alt="" />
                <div className='product-prop-container'>
                    <label>Name: </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="searchBar" type="text"/>
                </div>
                <div className='product-prop-container'>
                    <label>Description: </label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} className="searchBar" type="text"/>
                </div>
                <div className='product-prop-container'>
                    <label>Category: </label>
                    <input value={category} onChange={(e) => setCategory(e.target.value)} className="searchBar" type="text"/>
                </div>
                <div className='product-prop-container'>
                    <label>Price: </label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} className="searchBar" type="text"/>
                </div>
                <button onClick={submitChanges} className='glow-on-hover'>Submit</button>
            </div>
        </div>
    )
}
