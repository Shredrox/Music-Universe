import React from "react";
import { ProductCard } from "./ProductCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";

export function ProductsShowcase({products}){
    const responsive = {
        superLargeDesktop: {
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
          breakpoint: { max: 800, min: 0 },
          items: 1,
        }
      };

    return (
        <div>
            <div className="productsSliderSection">
              <div className="product-slider">
                <h3>Featured Products</h3>
                <Carousel 
                  draggable={false}
                  containerClass="carousel"
                  responsive={responsive}
                  slidesToSlide={1}
                  centerMode={false}
                  itemClass="carouselItem">
                  {products.slice(0, 5).map((product) => 
                    <ProductCard key={product.id} product={product}/>
                  )}
                </Carousel>    
              </div>
            </div>

            <div className="catalog-link-container">
              <Link className="catalog-link" to="/catalog">// Browse the Catalog</Link>
            </div>
        </div>
    )
}