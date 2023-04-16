import React from "react";
import { LoginForm } from "../components/LoginForm"
import { Header } from '../components/Header'
import { StartSection } from '../components/StartSection'
import { ProductsShowcase } from '../components/ProductsShowcase'

export function Home(){
    return (
        <div>
            <StartSection/>
            <ProductsShowcase/>
        </div>
    )
}