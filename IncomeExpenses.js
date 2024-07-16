import React, { useContext } from 'react';
import { Globalcontext } from '../context/GlobalState';

const IncomeExpenses = () => {
    const{transections}=useContext(Globalcontext)
    const amounts=transections.map(transection => transection.amount);
    const income = amounts 
    .filter(item=> item > 0)
    .reduce((acc , item)=> (acc +=item), 0)
    .toFixed(2);

    const expense=(amounts.filter(item => item < 0).reduce((acc, item) => (acc +=item), 0)*-1).toFixed(2);
  return (
    <div>
        <div>
      <h4>Income</h4>
      <p id="money-plus" className='money plus'>{income}</p>
    </div>
    <div>
        <h4>Expense</h4>
        <p id='moeny-minus' className='money minus'>{expense}</p>
    </div>
    </div>
  );
}

export default IncomeExpenses;
