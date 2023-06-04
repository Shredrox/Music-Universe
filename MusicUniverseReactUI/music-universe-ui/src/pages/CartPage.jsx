import React from 'react'
import { Cart } from '../components/Cart'

export const CartPage = ({products}) => {
  return (
    <div id='cart-section'>
        <Cart products={products}/>
    </div>
  )
}
