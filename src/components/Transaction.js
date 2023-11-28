import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount > 0 ? '+' : '-';
    const amount = Math.abs(transaction.amount);
    const type = transaction.amount > 0 ? 'plus' : 'minus'
  return (
    <li className={type}>
        {transaction.text}<span>{sign}${amount}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li> 
  )
}
