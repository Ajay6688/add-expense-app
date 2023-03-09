
import './ExpenseItem.css';
import './ExpenseItemDate'; 
import {Card} from '../UI/Card';
import { ExpenseItemDate } from './ExpenseItemDate';

export const ExpenseItem = (props)=>{

    return <Card className="expense-item">
       <ExpenseItemDate data = {props.date}/>
       <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
       </div>
    </Card> 
}