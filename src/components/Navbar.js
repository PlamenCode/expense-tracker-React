import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = ({ providerObj }) => {
    function onLogout(){
        providerObj.setAuthenticate(false);
        localStorage.removeItem('auth');
    }
  return (
    <div className='navbar'>
        { providerObj.authenticate 
            ? <button onClick={onLogout}>Logout</button>
            : <>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </>
        }
    </div>
  )
}
