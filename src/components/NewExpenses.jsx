import React from "react";
import './NewExpenses.css';
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";


const NewExpense=({onAddExpense})=>{
        const[isEditing,setIsEditing]=useState(false);
const startEditingHandler = () =>{
  setIsEditing(true);
}
 
  const stopEditingHandler=()=>{
    setIsEditing(false);
  }
  const onSaveExpenseDataHandler =(enteredExpenseData)=>{
const myExpense={
  id:Math.random().toString(),
  ...enteredExpenseData
}
console.log(myExpense);
onAddExpense(myExpense);
setIsEditing(false);
  }
return(
        <div className="new-expense">
          {!isEditing && <button onClick={startEditingHandler} >add new expense</button>}
          {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
        </div>
      )
}
export default NewExpense;