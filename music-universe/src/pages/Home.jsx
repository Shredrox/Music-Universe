import React from "react";
import { StartSection } from '../components/StartSection'
import { ProductsShowcase } from '../components/ProductsShowcase'
import { Footer } from '../components/Footer'

export function Home({products}){
    return (
        <div>
            <StartSection/>
            <ProductsShowcase products={products}/>
            <Footer/>
        </div>
    )
}