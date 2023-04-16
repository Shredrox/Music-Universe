import React from "react";
import { useState } from "react";
import myImage from '../assets/homeBackground.png';

export function Header(){
    return(
        <header className="headerBar">
            <nav className="navigation">
                <ul className="navList">
                    <li><a href="">Home</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">About Us</a></li>
                </ul>
            </nav>

            <input className="searchBar" type="text" placeholder="Search.."/>

            <div className="profileBar">
                <h3 className="profileName">Shredrox</h3>
                <img className="profileImg" src={myImage}  alt=""/>
            </div>
        </header>
    )
}