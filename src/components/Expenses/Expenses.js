import { useState } from 'react';
import './Expenses.css';
import {Card} from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {ExpensesList} from './ExpensesList';
import { ExpensesChart } from './ExpensesChart';

export const Expenses = (props)=>{

    let [filteredYear , setFilteredYear] = useState("2023");

    const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
        console.log(filteredYear)
    }

    const filterExpenses = props.data.filter(expense => expense.date.getFullYear().toString() === filteredYear)  ;

    return (
        <Card className="expenses">

            <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses = {filterExpenses} />
            <ExpensesList items = {filterExpenses} />
            
        </Card>
    );
}