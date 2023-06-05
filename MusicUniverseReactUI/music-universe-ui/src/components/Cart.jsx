import React, { useEffect, useState } from "react";
import { CartProduct } from "./CartProduct";
import cartIcon from '../assets/cartBtnIcon.png';
import { useNavigate } from "react-router-dom";

export function Cart({products}){
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

    const navigate = useNavigate();

    const getUser = async () => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if(user === null || user === undefined){
            return;
        }

        const cartProductsIds = user.cart.map((cartProduct) => cartProduct.productId);

        const productsInCart = cartProductsIds.map(id => products.find((product) => product.id === id));

        const productQuantities = user.cart.map((cartProduct) => cartProduct.quantity);

        const cartProducts =  productsInCart.map((product, index) => ({product, quantity: productQuantities[index]}));

        const totalPrice = cartProducts.reduce((acc, cartProduct) => acc + (cartProduct.product.price * cartProduct.quantity), 0);
        
        setCartProducts(cartProducts);
        setTotalPrice(totalPrice);
    }

    useEffect(() =>{
        getUser();    
    }, [])

    const removeFromCart = async (id) => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if(user === null || user === undefined){
          return;
        }
    
        const updateCart = user.cart.filter((cartProduct) => cartProduct.productId !== id);
        const updatedUser = {...user, cart: updateCart};
    
        const result = await fetch(`http://localhost:5000/users/${user.id}`, {
          method: "PUT", 
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(updatedUser)
        });
    
        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
        getUser();
    }

    return (
        <div id="cart-container">
            <div id="cart-products">
                { cartProducts.length > 0 ? 
                    cartProducts.map((cartProduct) => 
                        <CartProduct 
                        key={cartProduct.product.id} 
                        productId={cartProduct.product.id} 
                        product={cartProduct.product} 
                        productQuantity={cartProduct.quantity} 
                        toggleCart={removeFromCart}/>
                        )
                    :
                    <label className="cart-empty-label">Cart Empty. <br/> Log in to add products</label>
                }
            </div>
            <div id="cart-summary">
                <div className="your-cart-container">
                    Your Cart
                    <img src={cartIcon} alt="" />
                </div> 
                <div className="price-checkout-container">
                    <label>Total Price: ${totalPrice}</label>
                    <button onClick={cartProducts.length > 0 ? () => navigate('/order') : null} className="nav-button">Checkout</button>
                </div>
            </div>
        </div>
    )
}