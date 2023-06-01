import React from 'react'
import { Cart } from '../components/Cart'

export const CartPage = ({products, toggleCart}) => {
  return (
    <div id='cart-section'>
        <Cart products={products} toggleCart={toggleCart}/>
    </div>
  )
}
