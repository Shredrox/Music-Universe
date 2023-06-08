import React from 'react'
import { Cart } from '../components/Cart'

export function CartPage({products}){
  return (
    <div id='cart-section'>
        <Cart products={products}/>
    </div>
  )
}
