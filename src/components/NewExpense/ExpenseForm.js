import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const TitleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value
      };
    });
  };

  const AmountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: +event.target.value,
      };
    });
  };

  const DateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: new Date(event.target.value),
      };
    });
  };

  const FormHandler = (event) => {
    event.preventDefault();
    const FormData = userInput;
    props.onSaveExpenseData(FormData);
    //  props.onSaveExpenseData(event.userInput);

    // setEnteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");

    setUserInput({});
  };

  return (
    <form onSubmit={FormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={TitleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            onChange={DateChangeHandler}
          />
        </div>
        <div className="new-expense__action">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
