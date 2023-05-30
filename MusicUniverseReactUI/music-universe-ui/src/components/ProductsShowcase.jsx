import React from "react";
import { ProductCard } from "./ProductCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";

export function ProductsShowcase(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      };

    return (
        <div>
            <div className="productsSliderSection">
              <div className="product-slider">
                <Carousel 
                  containerClass="carousel"
                  responsive={responsive}
                  slidesToSlide={1}
                  centerMode={false}
                  itemClass="carouselItem">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                  </Carousel>
                  <Carousel 
                    containerClass="carousel"  
                    responsive={responsive}
                    itemClass="carouselItem">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                  </Carousel>
              
              </div>
            </div>

            <div className="catalog-link-container">
              <Link className="catalog-link" to="/catalog">// Browse the Catalog</Link>
            </div>
        </div>
    )
}