import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2023')
  const filteredExpenses =expenses.filter(year=>year.date.getFullYear().toString()===filteredYear);

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter filteredYear={setFilteredYear} selected={filteredYear}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList filter={filteredExpenses}/>
      
    </Card>
    </div>
  );
};

export default Expenses;
