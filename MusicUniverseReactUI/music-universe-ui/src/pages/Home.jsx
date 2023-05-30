import React from "react";
import { LoginForm } from "../components/LoginForm"
import { Header } from '../components/Header'
import { StartSection } from '../components/StartSection'
import { ProductsShowcase } from '../components/ProductsShowcase'
import { Footer } from '../components/Footer'

export function Home(){
    return (
        <div>
            <StartSection/>
            <ProductsShowcase/>
            <Footer></Footer>
        </div>
    )
}