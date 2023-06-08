import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function OrderPage({products}){
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderFormVisible, setOrderFormVisible] = useState(true);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(false);

    const isFormValid = name && address && creditCardNumber && phoneNumber;

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
        
        setTotalPrice(totalPrice);
    }

    useEffect(() =>{
        getUser();    
    }, [])

    const clearCart = async () => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if(user === null || user === undefined){
          return;
        }
    
        const updatedUser = {...user, cart: []};
    
        const result = await fetch(`http://localhost:5000/users/${user.id}`, {
          method: "PUT", 
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(updatedUser)
        });
    
        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
    }

    function finishOrder(e){
        if(!isFormValid){
            setError(true);
            return;
        }

        e.preventDefault()
        setOrderFormVisible(false);
        clearCart();
        setTimeout(function() {
            navigate('/');
        }, 3000);
    }

    return (
        <div className="gradient-page-background">
            {orderFormVisible ? (
            <div className='order-info-container'>
                Fill Order Information
                <div className="order-form">
                    <label>Name: </label>
                    <input value={name} type="text" className='order-input' onChange={(e) => setName(e.target.value)}/>
                    <label>Address: </label>
                    <input value={address} type="text" className='order-input' onChange={(e) => setAddress(e.target.value)}/>
                    <label>Credit Card Number: </label>
                    <input value={creditCardNumber} type="text" className='order-input' onChange={(e) => setCreditCardNumber(e.target.value)}/>
                    <label>Phone Number: </label>
                    <input value={phoneNumber} type="text" className='order-input' onChange={(e) => setPhoneNumber(e.target.value)}/>
                    {error && <span className='error-text'>Fill all the fields above.</span>}
                    Total Price: ${totalPrice}
                    <button onClick={finishOrder} className='glow-on-hover' >Finish Order</button>
                </div>
            </div>
            )
            : <label className='order-finish-text'>Order Placed. <br/> Thanks for shopping!</label>
            }
        </div>
    )
}
