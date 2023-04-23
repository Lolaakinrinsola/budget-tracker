import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = ({onAddExpense}) => {

    const onSaveExpenseData= function (enteredExpenseData) {
        const expenseData={
            ...enteredExpenseData,
            id:Math.ceil((Math.random().toString())*10)
        }
        onAddExpense(expenseData)
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  )
}

export default NewExpense