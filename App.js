import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransectionList from "./components/TransectionList"
import AddTransection from "./components/AddTransection"
import { GlobalProvider } from "./context/GlobalState"; 
import './App.css';

function App() {
  return (
    < GlobalProvider>
     <Header/>
     <Balance/>
     <IncomeExpenses/>
     <TransectionList/>
     <AddTransection/>
    </GlobalProvider>
  );
}

export default App;
