import React from "react";

import { ReactNode } from "react";
import "./Card.css";
interface ICard {
  children: ReactNode;
  className: string;
}
const Card = ({ children, className }: ICard) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
