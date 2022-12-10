import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  //other alternative for handling multiple states:
  // const [userInput, setUserInput]= useState({
  //     enterTtile:'',
  //      enterAmount,
  //      enterDate

  // })

  const titleChangeHandler = (e) => {
    setEnterTitle(e.target.value);

    //alternative return --> use function so that state snapshot is updated with current info:
    //  setUserInput((prevState)=>{
    //     return{...prevState, enterAmount: e.target.value};
    //  })
  };
  const amountChangeHandler = (e) => {
    setEnterAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnterDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      dae: new Date(enterDate),
    };
    console.log(expenseData);
    //clear form setting intial value back to string...// two way bidnding in form allows you to enter initial value to clear form.
    props.onSaveExpenseData(expenseData); //function is coming from NewExpense component being passed as prop to the form. Child can pass info to parent.
    setEnterAmount("");
    setEnterTitle("");
    setEnterDate("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enterTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enterAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              value={enterDate}
              min="2019-01-01"
              max="2023-12-31 "
            />
          </div>
        </div>
        <div className="new-expense__action">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
