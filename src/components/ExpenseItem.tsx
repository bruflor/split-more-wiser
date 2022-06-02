import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

interface IPropsExpensive {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

function ExpenseItem(props: IPropsExpensive) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
