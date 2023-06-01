import React from 'react'
import { Cart } from '../components/Cart'

export const CartPage = ({products}) => {
  return (
    <div>
        <Cart products={products}/>
    </div>
  )
}
