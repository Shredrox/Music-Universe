import Axios from 'axios';
import { useState } from "react";

export function RegisterForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitData = (event) => {
        event.preventDefault()
        const data = {
          name: name,
          email: email,
          password: password
        };

        Axios.post('https://localhost:7182/api/Users/Register', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
             console.error(error);
        });
    }

    return (
        <form className="register">
            REGISTER
            <label className='form-text' htmlFor="name">Name: </label>
            <input className='input' type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
            <label className='form-text' htmlFor="email">Email: </label>
            <input className='input' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label className='form-text' htmlFor="email">Password: </label>
            <input className='input' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <button className='glow-on-hover' type="submit" onClick={submitData}>Sign Up</button>
            <span>Already have an account? Login bro</span>
            <span>Forgor password? Remember bro</span>
        </form>
            
    )
}