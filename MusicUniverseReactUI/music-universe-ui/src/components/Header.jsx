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
                    <li><Link to="/login">Login</Link></li>
                    <li></li>
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