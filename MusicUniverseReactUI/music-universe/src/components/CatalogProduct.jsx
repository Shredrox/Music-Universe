import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function CatalogProduct({product, toggleCart}){
    const navigate = useNavigate(); 
    const [showCartMsg, setShowCartMsg] = useState(false);

    function stopPropagation(e) {
        e.stopPropagation();
    }

    function toggleCartMsg(){
        setShowCartMsg(true);
        setTimeout(() =>{
          setShowCartMsg(false);
        }, 3000);
    }

    return (
        <div onClick={() => {navigate(`/product/${product.id}`) }} className="catalog-product">
            <div className="product">
                <img className="featuredProductImg" src={product.image} alt="aaa" />
            </div>
            <p className="productName">
                {product.name}
            </p>
            <p className="productName">
                Price: ${product.price}
            </p>
            <div className='catalog-product-add-to-cart-container'>
                <button 
                    className="catalog-cart-button"
                    disabled={localStorage.getItem('loggedInUser') === null} 
                    onClick={(e) =>{stopPropagation(e); toggleCart(product.id, 1); toggleCartMsg()} }>
                    Add To Cart
                </button>
                {showCartMsg &&
                    <div className="add-to-cart-msg">
                    Added To Cart!
                    </div>
                }
            </div>
            
        </div>
    )
}