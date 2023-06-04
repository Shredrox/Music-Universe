import React, { useEffect, useState } from "react";
import { CartProduct } from "./CartProduct";
import cartIcon from '../assets/cartBtnIcon.png';

export function Cart({products, toggleCart}){
    const [user, setUser] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

    const getUser = async () => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if(user === null || user === undefined){
            return;
        }
        setUser(user);

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

    return (
        <div id="cart-container">
            <div id="cart-products">
                {cartProducts.map((cartProduct) => 
                    <CartProduct key={cartProduct.product.id} productId={cartProduct.product.id} product={cartProduct.product} productQuantity={cartProduct.quantity} toggleCart={toggleCart}/>
                )}
            </div>
            <div id="cart-summary">
                <span>Your Cart<img src={cartIcon} alt="" /></span> 
                <label>Total Price: ${totalPrice}</label>
                <button className="nav-button">Checkout</button>
            </div>
        </div>
    )
}