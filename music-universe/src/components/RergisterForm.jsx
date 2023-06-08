import React from "react";
import { useState } from "react";

export function RegisterForm({changeForm, closeForm}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

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
          setError(true);
          setErrorMsg("Username already taken.");
          return user;
        }
        else if(user.email === email){
          setError(true);
          setErrorMsg("Email already in use.");
          return user;
        }
      });

      if(user !== null && user !== undefined){
        return;
      }

      const newUser = {
       id: id,
       name: name,
       email: email,
       password: password,
       role: "user",
       cart: []
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
        setError(true);
        setErrorMsg("Fill all the fields above.");
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
          <input className='input' maxLength="20" type="text" id="name" name="name" value={name} onChange={(e) => {setName(e.target.value); setError(false);}}/><br/>
          <label className='form-text' htmlFor="email">Email: </label>
          <input className='input' type="email" id="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value); setError(false);}}/><br/>
          <label className='form-text' htmlFor="email">Password: </label>
          <input className='input' type="password" id="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value); setError(false);}}/><br/>
          {error && <span className="error-text">{errorMsg}</span>}
          <button className='glow-on-hover' type="submit" onClick={submitData}>Sign Up</button>
          <a className='register-form-login-button' onClick={changeForm}>Already have an account? Log In</a>
      </form>
    )
}