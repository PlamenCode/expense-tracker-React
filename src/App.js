import "./App.css";
import { useContext, useEffect, useState } from "react";

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpences } from './components/IncomeExpences';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider, GlobalContext } from './contexts/GlobalState';
import { Login } from "./components/Login";



function App() {
    const [authenticate, setAuthenticate] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('user')){
            setAuthenticate(true);
        } else{
            setAuthenticate(false);
        }
        console.log(authenticate);
    }, [])
    
  return (
    <GlobalProvider>
        <Header />
        {authenticate ? 
        <div className="container">
            <Balance />
            <IncomeExpences />
            <TransactionList />
            <AddTransaction />
        </div>
        : <Login />
        }
    </GlobalProvider>
  )
}

export default App;
