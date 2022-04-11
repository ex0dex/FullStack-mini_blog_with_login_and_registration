import axios from 'axios';
import React, { UseState } from 'react';
import { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = async (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password
        }
        await axios.post()
    }
    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form>
                <input type="text"
                    placeholder='Enter username'
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    required
                />
                <input type="password"
                    placeholder='Enter password'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    required
                />
            </form>
            <button className='login-btn' onClick={login} type="submit">
                LogIn
            </button>
        </div>
    );
};

export default LoginPage;