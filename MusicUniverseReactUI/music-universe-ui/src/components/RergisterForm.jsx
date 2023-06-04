import { useState } from "react";

export function RegisterForm({changeForm, closeForm}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const register = async(input) =>{
        const id = Math.random();

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
    }

    const submitData = (event) => {
        event.preventDefault()
        const data = {
          name: name,
          email: email,
          password: password
        };

        register(data);
        closeForm(name);
    }

    return (
        <form className="register">
            REGISTER
            <label className='form-text' htmlFor="name">Name: </label>
            <input className='input' maxLength="20" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
            <label className='form-text' htmlFor="email">Email: </label>
            <input className='input' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label className='form-text' htmlFor="email">Password: </label>
            <input className='input' type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <button className='glow-on-hover' type="submit" onClick={submitData}>Sign Up</button>
            <a className='register-form-login-button' onClick={changeForm}>Already have an account? Log In</a>
        </form>
    )
}