import React from "react";
import { useState } from "react";

export function RegisterForm({changeForm, closeForm}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [inputError, setInputError] = useState(false);

    const isFormValid = name && email && password;

    const fetchUsers = async () => {
      const result = await fetch('http://localhost:5000/users/');
      const data = await result.json();
      
      return data;
    }

    const register = async(input) =>{
      const id = Math.random();

      const users = await fetchUsers();    
      const user = users.find((user) =>{
        if(user.name === name){
          return user;
        }
      });

      console.log(user);

      if(user !== null && user !== undefined){
        setError(true);
        return;
      }

      const newUser = {
       id: id,
       name: name,
       email: email,
       password: password,
       role: "user",
       isActive: true
      };
    
      const result = await fetch(`http://localhost:5000/users`, {
        method: "POST", 
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      });

      localStorage.setItem('loggedInUser', JSON.stringify(newUser));

      closeForm(name);
      window.location.reload();
    }

    const submitData = (event) => {
      event.preventDefault()

      if(!isFormValid){
        setInputError(true);
        return;
      }

      const data = {
        name: name,
        email: email,
        password: password
      };

      register(data);
    }

    return (
      <form className="register">
          REGISTER
          <label className='form-text' htmlFor="name">Name: </label>
          <input className='input' maxLength="20" type="text" id="name" name="name" value={name} onChange={(e) => {setName(e.target.value); setError(false); setInputError(false);}}/><br/>
          <label className='form-text' htmlFor="email">Email: </label>
          <input className='input' type="email" id="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value); setError(false); setInputError(false);}}/><br/>
          <label className='form-text' htmlFor="email">Password: </label>
          <input className='input' type="password" id="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value); setError(false); setInputError(false);}}/><br/>
          {error && <span className="error-text">Username already taken.</span>}
          {inputError && <span className="error-text">Fill all the fields above.</span>}
          <button className='glow-on-hover' type="submit" onClick={submitData}>Sign Up</button>
          <a className='register-form-login-button' onClick={changeForm}>Already have an account? Log In</a>
      </form>
    )
}