import React, { ReactComponentElement, useState } from "react";

import Card from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props: any) => {
  const years = ["2022", "2021", "2020", "2019"];
  const [filterYear, setFilteryear] = useState(years[0]);

  const onSelected = (option: any) => {
    setFilteryear(option.target.value);
  };
  // console.log(filterYear);

  const filteredExpenses = props.items.filter((expense: any) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        label={"Filter by year"}
        selectValue={years}
        handle={(event) => onSelected(event)}
      />
      {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense: any) => {
          return (
            <ExpenseItem
              id={expense.id}
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
