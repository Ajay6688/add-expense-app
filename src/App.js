import { useState } from 'react';
import './App.css';

import {Expenses} from './components/Expenses/Expenses';
import {NewExpense} from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { title : "car wash" , amount : 250 , date : new Date("2023-09-26")  },
  { title : "samosas" , amount : 30 , date : new Date("2022-03-26")  },
  { title : "pineapple" , amount : 300 , date : new Date("2022-08-24")  },
  { title : "mangoes" , amount : 500 , date : new Date("2023-06-9")  }
];

function App() {

  let [expenseData , setExpenseData] = useState(DUMMY_EXPENSES);

  const addExpenses = (newExpenses)=>{

    setExpenseData((prevExpenses)=>{
      return [
        newExpenses ,
        ...prevExpenses
      ]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenses} />
       <Expenses data={expenseData} />
    </div>
  );
}

export default App;
