import React, { Component, useContext } from 'react';
import { Globalcontext } from '../context/GlobalState';

const Balance =()=> {
        const {transections} = useContext (Globalcontext);
        const amounts= transections.map(transection=>transection.amount)
        const total=amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
        return (
            <div>
            <h4>Your Balance</h4>
            <h1 >${total}</h1>
        </div>
        );
    };


export default Balance;
