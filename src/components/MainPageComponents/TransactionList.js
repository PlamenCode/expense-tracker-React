import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';

import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    
  return (
    <>
        <h3>History</h3>
        <ul className="list">
            { transactions.map(transaction => ( <Transaction transaction={transaction} key={transaction.id} /> ))}
        </ul>
    </>
  )
}
