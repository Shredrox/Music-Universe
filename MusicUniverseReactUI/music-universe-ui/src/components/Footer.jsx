import React from "react";
import { useState } from "react";
import myImage from '../assets/homeBackground.png';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RergisterForm";

export function Footer(){
    return(
        <div className="footer">
            Copyright © Mihail Shterev
        </div>
    )
}