import React from "react";
import { useState } from "react";

export function LoginForm({changeForm, closeForm}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    
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

      if(user === null || user === undefined){
        setError(true);
        return;
      }

      localStorage.setItem('loggedInUser', JSON.stringify(user));

      closeForm(user.name);
      window.location.reload();
    }

    const submitData = (event) => {
        event.preventDefault()
        const data = {
          email: email,
          password: password
        };

        login(data);
    }

    return (
        <form className="login">
            LOGIN
            <label className='form-text' htmlFor="email">Email: </label>
            <input className='input' type="email" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(false);}}/><br/>
            <label className='form-text' htmlFor="email">Password: </label>
            <input className='input' type="password" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }}/><br/>
            {error && <span className="error-text">User not found.</span>}
            <button className='glow-on-hover' type="submit" onClick={submitData}>Log In</button>
            <a className='register-form-login-button' onClick={changeForm}>Don't have an account? Sign Up</a>
        </form>
    )
}