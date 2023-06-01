import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import {  Routes, Route } from 'react-router-dom'
import { Catalog } from './pages/Catalog'

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await fetch('http://localhost:5000/products');
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

  const addToCart = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, inCart: !product.inCart };
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
      </Routes>
    </>
  )
}

export default App