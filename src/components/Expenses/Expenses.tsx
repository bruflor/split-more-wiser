import React, { useState } from "react";
import Card from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import "./Expenses.css";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

interface ExpensesProps {
  items: expenseProp[];
}
interface expenseProp {
  id: string;
  title: string;
  amount: number;
  date: Date;
}
const Expenses = (props: ExpensesProps) => {
  const years = ["2022", "2021", "2020", "2019"];
  const [filterYear, setFilteryear] = useState(years[0]);

  const onSelected = (option: any) => {
    console.log(option);
    setFilteryear(option.target.value);
  };

  const filteredExpenses = props.items.filter((expense: expenseProp) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        label={"Filter by year"}
        selectValue={years}
        handle={(event) => onSelected(event)}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
