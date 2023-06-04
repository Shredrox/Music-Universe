import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RergisterForm";
import { SearchBar } from "./SearchBar";
import { SearchBarResultList } from './SearchBarResultList';
import { FormModal } from "./FormModal";
import cartIcon from '../assets/cartBtnIcon.png';

export function Header({setLoggedInUser, user}){
    const [modalIsOpen, setIsOpen] = useState(false);  
    const [modalContent, setModalContent] = useState(<div></div>);
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [username,setUsername] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const getUser = async () =>{
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if(user !== null && user !== undefined){
            setButtonsVisible(false);
            setLoggedInUser(user);
            setUsername(user.name);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    function openModal(content) {
        setIsOpen(true);
        setModalContent(content);
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    }

    function changeModalFormToLogin(){
        setModalContent(<LoginForm changeForm={changeModalFormToRegister} closeForm={closeModalAndUpdateHeader}></LoginForm>);
    }

    function changeModalFormToRegister(){
        setModalContent(<RegisterForm changeForm={changeModalFormToLogin} closeForm={closeModalAndUpdateHeader}></RegisterForm>);
    }

    function closeModalAndUpdateHeader(user) {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
        setButtonsVisible(false);

        setUsername(user.name);
        setLoggedInUser(user);
    }

    async function logout() {
        localStorage.clear();
        setButtonsVisible(true);
        window.location.reload();
        //setLoggedInUser({});
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

            <div className='search-container'>
                <SearchBar setFilteredProducts={setFilteredProducts}></SearchBar>
                <SearchBarResultList filteredProducts={filteredProducts}></SearchBarResultList>
            </div>
            
            {buttonsVisible &&
            <div className="button-container">
                <button onClick={() => openModal(<LoginForm changeForm={changeModalFormToRegister} closeForm={closeModalAndUpdateHeader}></LoginForm>)} className="login-button" role="button">
                    <span>Log In</span>
                </button>
                <button onClick={() => openModal(<RegisterForm changeForm={changeModalFormToLogin} closeForm={closeModalAndUpdateHeader}></RegisterForm>)} className="login-button" role="button">
                    <span>Sign Up</span>
                </button>
            </div>
            }

            {!buttonsVisible && 
            <div className="button-container">
                <label className="username-label">{username}</label>
                <button onClick={logout} className="logout-button" role="button">
                    <span>Log Out</span>
                </button>
            </div>     
            }

            <FormModal 
                isOpen={modalIsOpen} 
                closeModal={closeModal}
                content={modalContent}>
            </FormModal>
        </header>
    )
}