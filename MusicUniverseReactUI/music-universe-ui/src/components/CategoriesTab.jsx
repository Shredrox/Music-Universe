import React from 'react'
import { useState } from 'react';

export function CategoriesTab({products, setFilteredProducts, setFilterOn}){
    const [activeButton, setActiveButton] = useState('');

    function filterProducts(category){
        const filteredProducts = products.filter((product) => product.category === category);

        setFilteredProducts(filteredProducts);
        setFilterOn(true);
    }

    function clearFilter(){
        setFilterOn(false);
        setActiveButton('');
    }

    function setButton(id){
        setActiveButton(id);
    }

    const buttonData = [
        { id: 1, category: "6 String" },
        { id: 2, category: "7 String" },
        { id: 3, category: "8 String" },
        { id: 4, category: "Single Cut" },
        { id: 5, category: "Fanfret" },
        { id: 6, category: "Headless" },
        { id: 7, category: "Baritone" },
        { id: 8, category: "Acoustic" },
    ];

    return (
        <div id="categories-container">
            Categories
            {buttonData.map((button) =>
                <button 
                    key={button.id} 
                    onClick={() => {filterProducts(button.category); setButton(button.id);}}
                    className={activeButton === button.id ? 'category-button-on' : 'category-button'}>
                    {button.category}
                </button>
            )}

            <button onClick={clearFilter} className='category-button'>Clear Filter</button>
        </div>
    )
}