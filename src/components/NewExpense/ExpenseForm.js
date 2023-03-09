import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props)=>{

    const [inputTitle , setTitle] = useState("");
    const [inputAmount , setAmount] = useState("");
    const [inputDAte , setDate] = useState("");

    const titleHandler = (event)=>{
        setTitle(event.target.value);
    }

    const amountHandler = (event)=>{
        setAmount(event.target.value);
    }

    const dateHandler = (event)=>{
        setDate(event.target.value);
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title : inputTitle ,
            amount : +inputAmount ,
            date : new Date(inputDAte)
        }

        props.onSaveExpenseForm(expenseData);
        setTitle("");
        setDate("");
        setAmount("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type='text'
                    value={inputTitle}
                    onChange={titleHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type='number' 
                    value={inputAmount}
                    onChange={amountHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                    type='date'
                    value={inputDAte} 
                    onChange={dateHandler} 
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
        </form>
    );
}