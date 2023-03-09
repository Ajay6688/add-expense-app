
import './NewExpense.css';

import {ExpenseForm} from  './ExpenseForm';

export const NewExpense = (props)=>{

    const SaveExpenseFormHandler= (inputExpenseData)=>{
        const expenseData = {
            ...inputExpenseData,
            id : Math.random().toString()
        } 
        
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseForm={SaveExpenseFormHandler}/>
        </div>
    );
}