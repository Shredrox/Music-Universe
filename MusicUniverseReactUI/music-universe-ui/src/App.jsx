import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Catalog } from './pages/Catalog'
import { CartPage } from './pages/CartPage'
import { ProductPage } from './pages/ProductPage'
import { ProductEditPage } from './pages/ProductEditPage'

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({});

  const fetchProducts = async () => {
    const result = await fetch('http://localhost:5000/products/');
    const data = await result.json();
    
    return data;
  }

  const getProducts = async () => {
    const getProductsFromServer = await fetchProducts();
    setProducts(getProductsFromServer);
    setIsLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, [])

  const fetchProduct = async (id) => {
    const result = await fetch(`http://localhost:5000/products/${id}`);
    const data = await result.json();
    return data;
  }

  const addToCart = async (id, quantity) => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    const userCart = user.cart;
    userCart.push({productId: id, quantity: quantity});
    const updatedUser = {...user, cart: userCart};

    const result = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PUT", 
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    });
  }

  const addReview = async(id, review) =>{
    const reviewedProduct = await fetchProduct(id);
    const updatedReviews = reviewedProduct.reviews;
    updatedReviews.push(review)
    const updatedProduct = { ...reviewedProduct, reviews: updatedReviews};

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

  if(isLoading) return <div>loading</div>

  return (
    <>
      <Header setLoggedInUser={setLoggedInUser} user={loggedInUser}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<Catalog toggleCart={addToCart}/>} />
        <Route path="/cart" element={<CartPage products={products} toggleCart={addToCart}/>} />
        <Route path="/product/:id" element={<ProductPage toggleCart={addToCart} onAdd={addReview}/> } />
        <Route path="/edit/product/:id" element={<ProductEditPage/> } /> 
      </Routes>
    </>
  )
}

export default App