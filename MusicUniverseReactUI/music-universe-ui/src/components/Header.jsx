import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RergisterForm";
import { FormModal } from "./FormModal";
import cartIcon from '../assets/cartBtnIcon.png';

export function Header(){
    const [modalIsOpen, setIsOpen] = useState(false);  
    const [modalContent, setModalContent] = useState(<div></div>);

    function openModal(content) {
        setIsOpen(true);
        setModalContent(content);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    }

    return(
        <header className="headerBar">
            <nav className="navigation">
                <ul className="navList">
                    <li>
                        <Link to="/">
                            <button className="nav-button" role="button">
                                Home
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/catalog">
                            <button className="nav-button" role="button">
                                Catalog
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <button className="cart-button" role="button">
                                <img id="cart-icon" src={cartIcon} alt="" />
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>

            <input className="searchBar" type="text" placeholder="Search.."/>

            <div className="button-container">
                <button onClick={() => openModal(<LoginForm></LoginForm>)}  className="login-button" role="button">
                    <span>Login</span>
                </button>
                <button onClick={() => openModal(<RegisterForm></RegisterForm>)} className="login-button" role="button">
                    <span>Sign Up</span>
                </button>
            </div>

            <FormModal 
                isOpen={modalIsOpen} 
                closeModal={closeModal}
                content={modalContent}>
                    
            </FormModal>
        </header>
    )
}