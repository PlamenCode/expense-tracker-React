import React from 'react';
import { Balance } from './Balance';
import { IncomeExpences } from './IncomeExpences';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

export const MainPage = () => {
  return (
    <div className='container'>
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
    </div>
  )
}
