import { useState ,useContext } from "react";
import { Globalcontext } from "../context/GlobalState";
import React from 'react';

const AddTransection = () => {
   
    const[text, setText] = useState('');
    const[amount, setAmount] = useState('');
    console.log(amount)
    const {addtransection}=useContext(Globalcontext);
    const onSubmit=e=>{
        e.preventDefault();
        const newTransection ={
            id:Math.floor(Math.random() *1000000),
            text,amount:+amount
        }
        addtransection(newTransection);
    }
      return (
    
    <div>
     <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor ="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)}placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor ="amount"> Amount <br/>
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div> 

  );
}

export default AddTransection;
