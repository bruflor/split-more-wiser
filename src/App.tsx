import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NewExpense />
      <Expenses />
    </div>
  );
};

export default App;
