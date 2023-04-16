import React from "react";
import { ProductCard } from "./ProductCard";

export function ProductsShowcase(){
    return (
        <div>
            <div className="productsSliderSection">
            <div className="productsSlider1">
                <button className="sliderBtn" >
                    
                </button>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <button className="sliderBtn">
                    
                </button>
                
            </div>
        </div>
        </div>
    )
}