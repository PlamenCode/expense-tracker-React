import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const baseUrl = 'http://localhost:4200/ExpenseTracker/auth';

export const Login = ({ providerObj }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        if(email == '' || password == ''){
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        }
        fetch(`${baseUrl}/login`, requestOptions)
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('auth', res.token);
                localStorage.setItem('userId', res.userId);
                providerObj.setAuthenticate(true);
                navigate('/');
            })
            .catch(err => console.log(err))
    }
  return (
    <form onSubmit={onSubmit}>
        <h3>Login Form</h3>
        <div className="form-control">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} 
                type="text" name='email' placeholder='example@email.com'/>
        </div>
        <div className="form-control">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} 
                type="password" name='password' placeholder='*****'/>
        </div>
        <button type='submit'>Login</button>
    </form>
  )
}
