import React from 'react'

export const CartProduct = ({product}) => {
  return (
    <div className="catalog-product">
            <div className="product">
                <img className="featuredProductImg" src={product.image} alt="aaa" />
            </div>
            <p className="productName">
                {product.name}
            </p>
    </div>
  )
}
