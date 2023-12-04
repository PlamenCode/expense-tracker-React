import React, { createContext, useEffect, useReducer, useState } from 'react';
import AppReducer from './AppReducer';
const baseUrl = 'http://localhost:4200/ExpenseTracker/data'

//Initial State
let initialState = {
    transactions: [],
}

//Creating global context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
        fetch(`${baseUrl}/${localStorage.getItem('userId')}`, requestOptions)
            .then(res => res.json())
            .then(res => {
                dispatch({ type: 'RESET-STATE' });
                res[0].expenses.forEach(element => {
                    dispatch({
                        type: 'ADD_TRNSACTION',
                        payload: element
                    })
                });
            })
            .catch(err => console.log(err))
    }, [])

    //Action
    function deleteTransaction(id){

        //TODO FINISH DELETE REQUEST AND UPDATING OF STATE
        // AND DELETE IN THE REST SERVICE TO FIND BY USER ID AND FILTER EXPENSES
        // TO REMOVE THE EXPENSE WTH THE GIVEN ID

        // const requestOptions = {
        //     method: 'DELETE',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ user: localStorage.getItem('userId')})
        // }
        // fetch(`${baseUrl}/${id}`, requestOptions)
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err))
    };

    function addTransaction(transaction){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({transaction, user: localStorage.getItem('userId')})
        }
        fetch(`${baseUrl}`, requestOptions)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'ADD_TRNSACTION',
                    payload: res.expenses[res.expenses.length -1]
                })
            })
            .catch(err => console.log(err))
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