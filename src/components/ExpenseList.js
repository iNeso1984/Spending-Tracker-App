import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
  
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found!</h2>
    }
  return (
    <div>
          <ul className="expenses-list">

 {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />))}
          </ul>
   
    </div>
  )
}

export default ExpenseList