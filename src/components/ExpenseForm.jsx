import './ExpenseForm.css';
import React,{useState} from "react"
;
const ExpenseForm = () =>{
          const[title,setTitle]=useState('');
          const[amount,setAmount]=useState('');
          const[date,setDate]=useState('');

const TitleChangeHandler = (event) =>{
  console.log(event,"this is my event");
  setTitle(event.target.value);

}
const TitleAmountHandler = (event) =>{
  setAmount(event.target.value);
  
}
const TitleDateHandler = (event) =>{
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
}
  return (
    <form onSubmit={AdarshHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label >Title</label>
          <input type="text" value={title} onChange={TitleChangeHandler}/>
        </div>
        <div  className="new-expense__control">
          <label >Amount</label>
          <input type="number" value={amount} onChange={TitleAmountHandler}/>
        </div>
        <div className="new-expense__control">
          <label >Date</label>
          <input type="date" value={date} onChange={TitleDateHandler}/>
        </div>
      </div>

      <div className='new-expense__actions'>
        <button>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;