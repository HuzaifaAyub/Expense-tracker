import React from 'react';
import { Globalcontext } from '../context/GlobalState';
import { useContext } from 'react';
const Transection = ({transection}) => {
    const {deletetransection} = useContext (Globalcontext);
    const sign= transection.amount < 0 ?'-': '+'
  return (
    <li className={transection.amount < 0 ? 'minus': 'plus'}> {transection.text} <span>{sign}${Math.abs(transection.amount)}<button onClick={()=> deletetransection(transection.id)} className='delete-btn'>x</button></span></li>
  );
}

export default Transection;
