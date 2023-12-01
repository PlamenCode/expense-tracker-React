import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const baseUrl = 'http://localhost:4200/ExpenseTracker/auth';

export const Register = ({ providerObj }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        if(email === '' || password === '' || repass === ''){
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, repass })
        }
        fetch(`${baseUrl}/register`, requestOptions)
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('auth', res.token);
                providerObj.setAuthenticate(true);
                navigate('/');
            })
            .catch(err => console.log(err))
    }
  return (
    <form onSubmit={onSubmit}>
        <h3>Register Form</h3>
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
        <div className="form-control">
            <label htmlFor="repass">Repeat Password</label>
            <input onChange={(e) => setRepass(e.target.value)} 
                type="password" name='repass' placeholder='*****'/>
        </div>
        <button type='submit'>Register</button>
    </form>
  )
}
