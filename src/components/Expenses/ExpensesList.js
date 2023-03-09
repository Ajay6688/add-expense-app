
import { ExpenseItem } from "./ExpenseItem";

export const ExpensesList = (props)=>{

    if(props.items.length === 0){
        return <h2>expenses not found</h2>
    }

    return (
        <li>
            {props.items.map((exp, i)=>{
               return <ExpenseItem title={exp.title} amount={exp.amount} date ={exp.date}  key={i} />
            })
           }
        </li>
        );
}