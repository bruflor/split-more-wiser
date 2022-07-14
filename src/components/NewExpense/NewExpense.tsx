import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
interface NewExpenseProps {
  onAddExpense: (arg0: ExpenseProps) => void;
}
interface ExpenseProps {
  //   id: string;
  title: string;
  amount: string | number;
  date: Date;
}

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const [openForm, setOpenForm] = useState(false);

  //Function  saves the data
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseProps) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {openForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          isOpenForm={() => setOpenForm(false)}
        />
      ) : (
        <button onClick={() => setOpenForm(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
