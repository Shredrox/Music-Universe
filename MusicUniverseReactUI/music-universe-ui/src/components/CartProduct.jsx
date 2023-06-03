import React from 'react'

export const CartProduct = ({product, toggleCart}) => {
  return (
    <div className="cart-product-card">
      <div className="cart-product">
          <img className="featuredProductImg" src={product.image} alt="aaa" />
      </div>
      <p className="card-product-name">
          {product.name}
      </p>
      <p className="card-product-name">
          Price: ${product.price}
      </p>
      <button className="cart-button" onClick={() => toggleCart(product.id)}>
          X
      </button>
    </div>
  )
}
