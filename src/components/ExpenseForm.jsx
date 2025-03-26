import './ExpenseForm.css';
import React,{useState} from "react"
import Card from './Card.jsx'
const ExpenseForm = ({onSaveExpenseData,onCancel}) =>{
          const[title,setTitle]=useState('');
          const[amount,setAmount]=useState('');
          const[date,setDate]=useState('');

 const titleHandler = (event) =>{
            setTitle(event.target.value);
            
          }

const amountHandler = (event) =>{
  setAmount(event.target.value);
  
}
const dateHandler = (event) =>{
  setDate(event.target.value);
  
}

const AdarshHandler = (event)=>{
event.preventDefault();
const expenseData={
  title:title,
  amount:amount,
  date:new Date(date)

};
console.log(expenseData,"this is my data")
onSaveExpenseData(expenseData);
}
  return (
    <form onSubmit={AdarshHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label >Title</label>
          <input type="text" value={title} onChange={titleHandler}/>
        </div>
        <div  className="new-expense__control">
          <label >Amount</label>
          <input type="number" value={amount} onChange={amountHandler}/>
        </div>
        <div className="new-expense__control">
          <label >Date</label>
          <input type="date" value={date} onChange={dateHandler}/>
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;