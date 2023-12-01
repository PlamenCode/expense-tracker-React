import React, { createContext, useEffect, useReducer, useState } from 'react';
import AppReducer from './AppReducer';

//Initial State
let initialState = {
    transactions: [],
}

//Creating global context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    };

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRNSACTION',
            payload: transaction
        });
    };

    return(
        <GlobalContext.Provider value={{ 
                transactions: state.transactions,
                deleteTransaction,
                addTransaction,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}