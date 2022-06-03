import { ReactNode } from "react";
import "./Card.css";
interface ICard {
  children: ReactNode;
  className: string;
}
function Card({ children, className }: ICard) {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
}

export default Card;
