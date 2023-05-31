import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RergisterForm";
import { FormModal } from "./FormModal";

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
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