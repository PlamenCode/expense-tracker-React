import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';


export const IncomeExpences = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transactions => transactions.amount);

    const income = amounts
        .filter(value => value > 0)
        .reduce((acc, value) => (acc += value), 0)
        .toFixed(2);

    const expense = (amounts
        .filter(value => value < 0)
        .reduce((acc, value) => (acc += value), 0) * -1)
        .toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${expense}</p>
        </div>
      </div>
  )
}
