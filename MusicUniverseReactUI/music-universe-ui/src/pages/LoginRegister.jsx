import React from "react";
import background from '../assets/loginBackground.png';
import { LoginForm } from "../components/LoginForm";

export function LoginRegister(){
    return (
        <div className="loginContainer">
            <LoginForm/>
            <img className="loginImage" alt="" />
        </div>
        
    )
}