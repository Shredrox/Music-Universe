import React from 'react'

export const SearchBarResultList = ({filteredProducts}) => {
  return (
    <div>
      {filteredProducts.length > 0 &&
      <div className="search-results">
          {filteredProducts.map((product) =>
              <div key={product.id}>
                <img className='smol' src={product.image} alt="" />
                {product.name}
              </div>
          )}
      </div>
      }
    </div>
  )
}
