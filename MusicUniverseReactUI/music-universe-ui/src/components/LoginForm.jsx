import React from "react";
import { useState } from "react";
import Axios from 'axios';

export function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fetchUsers = async () => {
        const result = await fetch('http://localhost:5000/users/');
        const data = await result.json();
        
        return data;
    }
    
    const login = async(input) =>{
        const users = await fetchUsers();    
        const user = users.find((user) =>{
         if(user.email === input.email && user.password === input.password){
           return user;
         }
        });
    
        const loggedInUser = { ...user, isActive: true};
    
        const result = await fetch(`http://localhost:5000/users/${loggedInUser.id}`, {
          method: "PUT", 
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(loggedInUser)
        });
    }

    const submitData = (event) => {
        event.preventDefault()
        const data = {
          email: email,
          password: password
        };

        login(data);
        // Axios.post('https://localhost:7182/api/Users/Login', data)
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //      console.error(error);
        // });
    }

    return (
        <form className="login">
            LOGIN
            <label className='form-text' htmlFor="email">Email: </label>
            <input className='input' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label className='form-text' htmlFor="email">Password: </label>
            <input className='input' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <button className='glow-on-hover' type="submit" onClick={submitData}>Log In</button><br/><br/><br/>
        </form>
    )
}