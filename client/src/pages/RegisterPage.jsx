import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../helpers/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const {setAuthState} = useContext(AuthContext)

    const register = async (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password,
            token:token
        }
        await axios.post('http://localhost:5000/api/user/reg', data).then((response)=>{
            if(response.data.error){
                alert(response.data.error)
            } else {
                localStorage.setItem("accessToken", response.data)
                setAuthState(true)
                navigate('/login')
                
            }
            console.log(response.data)
        })
    }
    return (
        <div className="container">
            <h1>Registration</h1>
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
                onClick={register}
                 className="btn btn-primary btn-block btn-large">Registration</button>
            </form>
        </div>
    );
};

export default RegisterPage;