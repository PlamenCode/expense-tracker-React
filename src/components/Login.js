import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(e){
        e.preventDefault();
        if(email == '' || password == ''){
            return;
        }
        console.log(email, password);
        localStorage.setItem('user', {email, password});
        window.location.reload();
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
