import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import {  Routes, Route } from 'react-router-dom'
import { Catalog } from './pages/Catalog'
import { CartPage } from './pages/CartPage'

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await fetch('http://localhost:5000/products/');
    const data = await result.json();
    
    return data;
  }

  const fetchProduct = async (id) => {
    const result = await fetch(`http://localhost:5000/products/${id}`);
    const data = await result.json();
    
    return data;
  }

  useEffect(() => {
    const getProducts = async () => {
      const getProductsFromServer = await fetchProducts();
      setProducts(getProductsFromServer);
    }

    getProducts();
  }, [])

  const addToCart = async (id) => {
    const productToAdd = await fetchProduct(id);
    const updatedProduct = { ...productToAdd, inCart: !productToAdd.inCart};

    const result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT", 
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    });

    const data = await result.json();

    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, inCart: data.inCart };
      }
      return product;
    });

    setProducts(updatedProducts);
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<Catalog products={products} toggleCart={addToCart}/>} />
        <Route path="/cart" element={<CartPage products={products} toggleCart={addToCart}/>} />
      </Routes>
    </>
  )
}

export default App