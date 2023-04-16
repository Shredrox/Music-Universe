import Axios from 'axios';
import { useState } from "react";

export function LoginForm(){
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

        Axios.post('https://localhost:7182/api/Users', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
             console.error(error);
        });
    }

    return (
        <form className="login">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <label htmlFor="email">Password: </label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <button type="submit" onClick={submitData}>Submit</button><br/><br/><br/>
        </form>
    )
}