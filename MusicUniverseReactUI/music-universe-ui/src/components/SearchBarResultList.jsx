import React from 'react'
import { useNavigate } from "react-router-dom";

export const SearchBarResultList = ({filteredProducts}) => {
  const navigate = useNavigate(); 

  return (
    <div>
      {filteredProducts.length > 0 &&
      <div className="search-results">
          {filteredProducts.map((product) =>
              <div onClick={() => {navigate(`/product/${product.id}`) }} className='search-result' key={product.id}>
                <img className='smol' src={product.image} alt="" />
                {product.name}
              </div>
          )}
      </div>
      }
    </div>
  )
}
