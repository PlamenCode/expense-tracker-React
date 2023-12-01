import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from './components/Header';
import { MainPage } from "./components/MainPageComponents/MainPage";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";

import { GlobalProvider } from './contexts/GlobalState';
import { RouteGuardUser } from "./guards/RouteGuardUser";
import { RouteGuardGuest } from './guards/RouteGuardGuest';
import { Register } from "./components/Register";



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
    <GlobalProvider>
        <Navbar providerObj={providerObj}/>
        <Header/>
        <Routes>
            <Route element={ <RouteGuardGuest />}>
                <Route path="/login" element={ <Login providerObj={providerObj}/>} />
                <Route path="/register" element={ <Register providerObj={providerObj}/>} />
            </Route>
            <Route element={ <RouteGuardUser /> }>
                <Route path="/" element={ <MainPage /> }/>
           </Route>
    
    </Routes>
    </GlobalProvider>
  )
}

export default App;
