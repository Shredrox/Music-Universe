import React from "react";
import Axios from "axios";
import { useState } from "react";

export function ProfileBar(){
    const [user, setUser] = useState(null);

    Axios.get('https://localhost:7182/api/Users/Login', data)

    return(
        <div>

        </div>
    )
}