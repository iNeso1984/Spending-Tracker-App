import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses";


const dummy_expenses = [
  { id: "1", title: "Mortgage", amount: 1400, date: new Date(2022, 12, 1) },
  {
    id: "2",
    title: "Mobile Service",
    amount: 110,
    date: new Date(2022, 12, 1),
  },
  {
    id: "3",
    title: "Health Insurance",
    amount: 400,
    date: new Date(2022, 12, 1),
  }, 
  {
    id: "3",
    title: "Health Insurance",
    amount: 400,
    date: new Date(2023, 12, 1),
  },
   {
    id: "4",
    title: "Car Insurance",
    amount: 200,
    date: new Date(2021, 12, 1),
  }
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
