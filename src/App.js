import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";


const dummy_expenses = [
  { id: "1", title: "Mortgage", amount: 1400, date: new Date(2022,10,4) },
  {
    id: "2",
    title: "Mobile Service",
    amount: 110,
    date: new Date(2022, 12, 22),
    
  },
  {
    id: "3",
    title: "Health Insurance",
    amount: 400,
    date: new Date(2022, 12, 3),
  }, 

];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  console.log(expenses, "from app.js")

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]; //propper way to update state making sure there is a proper snapshot.
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />

    </div>
  );
}

export default App;