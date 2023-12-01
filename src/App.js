import "./App.css";

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpences } from './components/IncomeExpences';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import {  GlobalProvider } from './contexts/GlobalState';
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";


function App() {
    const [authenticate, setAuthenticate] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setAuthenticate(true);
        } else{
            setAuthenticate(false);
        }
    }, []);
     
    const providerObj = {
        authenticate,
        setAuthenticate
    };

  return (
    //To finish routing 
    <GlobalProvider>
        <Navbar providerObj={providerObj}/>
        <Header/>
        {authenticate ?
            <div className="container">
                <Balance />
                <IncomeExpences />
                <TransactionList />
                <AddTransaction />
            </div>
        : <Login providerObj={providerObj}/>
    }
    </GlobalProvider>
  )
}

export default App;
