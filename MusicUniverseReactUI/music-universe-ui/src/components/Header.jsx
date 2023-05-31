import React from "react";
import { useState } from "react";
import myImage from '../assets/homeBackground.png';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RergisterForm";

export function Header(){
    const [modalIsOpen, setIsOpen] = useState(false);  

    const customStyles = {
        overlay:{
            background: 'rgba(0, 0, 0, 0.5)'
        },
        content:{
            left: '0',
            background: 'none',
            border: 'none',
            width: '100%',
            height: '700px',
            display: 'flex',
            margin: '0',
            padding: '0',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        }
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
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
                <button  className="login-button" role="button">
                    <span>Login</span>
                </button>
                <button onClick={openModal} className="login-button" role="button">
                    <span>Sign Up</span>
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}>

                <RegisterForm></RegisterForm>
                <button id="modal-close-button" onClick={closeModal}>X</button>
            </Modal>
        </header>
    )
}