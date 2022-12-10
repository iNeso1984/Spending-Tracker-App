import React from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseHandler=(data)=>{
        const expenseData ={
            ...data,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        console.log(expenseData);



    }
  return (
    <div className="new-expense">
  <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>
  )
}

export default NewExpense