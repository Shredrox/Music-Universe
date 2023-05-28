import React from "react";
import background from '../assets/loginBackground.png';
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RergisterForm";

export function LoginRegister(){
    return (
        <div className="loginContainer">
            <RegisterForm/>
            <img className="loginImage" alt="" />
        </div>
        
    )
}