import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

interface IExpenseItem {
  key: string;
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export const ExpensesList = (props: any) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense: IExpenseItem) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
