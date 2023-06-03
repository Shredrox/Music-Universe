import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RergisterForm";
import { FormModal } from "./FormModal";
import cartIcon from '../assets/cartBtnIcon.png';

export function Header(){
    const [modalIsOpen, setIsOpen] = useState(false);  
    const [modalContent, setModalContent] = useState(<div></div>);
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [username,setUsername] = useState('');

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

    function closeModalAndUpdateHeader(username) {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
        setButtonsVisible(false);
        setUsername(username);
    }

    async function logout() {
        const fetchUsers = async () => {
            const result = await fetch('http://localhost:5000/users/');
            const data = await result.json();
            
            return data;
        }

        const users = await fetchUsers();    
        const user = users.find((user) =>{
         if(user.isActive == true){
           return user;
         }
        });

        const loggingOutUser = { ...user, isActive: false};

        const result = await fetch(`http://localhost:5000/users/${loggingOutUser.id}`, {
          method: "PUT", 
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(loggingOutUser)
        });

        setButtonsVisible(true);
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