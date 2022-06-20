import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const addExpenseHandler = (expense: React.ChangeEvent<HTMLInputElement>) => {
    console.log(expense);
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
