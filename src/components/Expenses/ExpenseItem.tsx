import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

interface IPropsExpensive {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = (props: IPropsExpensive) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
