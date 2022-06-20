import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// interface INewExpense {
//   onAddExpense: Function;
// }

interface NewExpenseProps {
  onAddExpense: (arg0: ExpensePorps) => void;
}

interface ExpensePorps {
  //   id: string;
  title: string;
  amount: string | number;
  date: Date;
}

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  //Function  saves the data
  const saveExpenseDataHandler = (enteredExpenseData: ExpensePorps) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
