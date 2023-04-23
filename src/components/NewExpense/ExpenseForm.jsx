import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = ({onSaveExpenseData}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [display, setDisplay] = useState(true)

    const titleChangeHandler=function (e) {
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler=function (e) {
        setEnteredAmount(e.target.value)
    }
    const dateChangeHandler=function (e) {
        setEnteredDate(e.target.value)
    }
    const displayHandler=function (e) {
        e.preventDefault()
        setDisplay(!display)
    }
    const submitHandler=function (e) {
        e.preventDefault();

        const expenseData={
            title: enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate)
        }
        onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
  return (
    <div>
        {display? (<button onClick={displayHandler}>Add Expense</button>):
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
                <label htmlFor="title">Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="amount">Amount</label>
                <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="date">Date</label>
                <input type="date" min='2019-01-01' value={enteredDate} onChange={dateChangeHandler}/>
            </div>

            <div className='new-expense__actions'>
                <button onClick={displayHandler} >Cancel</button>
                <button type='submit'  >Add Expense</button>
            </div>
        </div>
    </form>}
    
    </div>
    )
}

export default ExpenseForm