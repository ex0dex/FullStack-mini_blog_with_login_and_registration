import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext';

const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setAuthState} = useContext(AuthContext)

    const login = async (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password
        }
        await axios.post('http://localhost:5000/api/user/login', data).then((response)=>{
            if(response.data.error){
                alert(response.data.error)
            } else {
                localStorage.setItem("accessToken", response.data)
                setAuthState(true)
                navigate('/create')
            }
            console.log(response.data)
        })
       
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <form method="post">
                <input
                    type="text"
                    placeholder="Username"
                    required="required" 
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}
                    />
                    
                <input type="password"
                    placeholder="Password"
                    required="required" 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    />

                <button type="submit"
                onClick={login}
                 className="btn btn-primary btn-block btn-large">Let me in.</button>
            </form>
        </div>
    );
};

export default LoginPage;