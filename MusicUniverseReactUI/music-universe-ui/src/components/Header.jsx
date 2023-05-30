import React from "react";
import { useState } from "react";
import myImage from '../assets/homeBackground.png';
import { Link } from "react-router-dom";

export function Header(){

    return(
        <header className="headerBar">
            <nav className="navigation">
                <ul className="navList">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li></li>
                </ul>
            </nav>

            <input className="searchBar" type="text" placeholder="Search.."/>

            <div className="button-container">
                
                <Link to="/login" style={{textDecoration: 'none'}}>
                    <button className="login-button" role="button">
                        <span>Login</span>
                    </button>
                </Link>
                <button className="login-button" role="button">
                    <span>Sign Up</span>
                </button>
            </div>
        </header>
    )
}