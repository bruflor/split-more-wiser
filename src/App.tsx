import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

interface Expense {
  id?: string;
  title: string;
  amount: string | number;
  date: Date;
}
const App = () => {
  const addExpenseHandler = ({ id, title, amount, date }: Expense) => {
    console.log({ id: id, title: title, amount: amount, date: date });
    console.log(" In app component");
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
};

export default App;
