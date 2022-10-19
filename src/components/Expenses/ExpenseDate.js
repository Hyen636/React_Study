import "./ExpenseDate.css";
import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" }); //달을 영어로
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); //월을 2자리로
  const year = props.date.getFullYear(); //연도를 4자리로

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
