import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = ({ providerObj }) => {
    function onLogout(){
        providerObj.setAuthenticate(false);
        localStorage.removeItem('auth');
    }
  return (
    <div className='navbar'>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
        <button onClick={onLogout}>Logout</button>
    </div>
  )
}
