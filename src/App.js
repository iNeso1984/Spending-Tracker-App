import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "1", title: "Mortgage",
     amount: 1400, 
     date: new Date(2022, 12, 1) },
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
    { id: "4", title: "Furniture", amount: 150, date: new Date(2022, 12, 1) },
    { id: "5", title: "Car", amount: 400, date: new Date(2022, 12, 1) },
    { id: "6", title: "Wifi", amount: 90, date: new Date(2022, 12, 1) },
    {
      id: "7",
      title: "Electric/Utilities",
      amount: 350,
      date: new Date(2022, 12, 1),
    },
    { id: "8", 
    title: "Ballet", amount: 70, date: new Date(2022, 12, 1) },
    { id: "9", title: "School Loan", amount: 100, date: new Date(2022, 12, 1) },
    { id: "10", title: "CC", amount: 200, date: new Date(2022, 12, 1) },
    { id: "11", title: "Other", amount: 200, date: new Date(2022, 12, 1) },
    {
      id: "12",
      title: "Food and Gas",
      amount: 1600,
      date: new Date(2022, 12, 1),
    },
  ];

  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
