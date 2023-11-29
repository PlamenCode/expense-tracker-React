import React from 'react'

export const Header = ({ authenticate, setAuthenticate }) => {
    function onLogout(){
        localStorage.removeItem('auth');
        setAuthenticate(false);
    }
  return (
    <>
        <h2>Expense Tracker</h2>
        {!authenticate ?
        <>
            <button>Login</button>
            <button>Register</button>
        </> : <button onClick={onLogout}>Logout</button>
        }
    </>
  )
}
