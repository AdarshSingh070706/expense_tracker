import React from "react";
import './NewExpenses.css';
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";


const NewExpense=()=>{
        const[isEditing,setIsEditing]=useState(false);
const startEditingHandler = () =>{
  setIsEditing(true);
}

return(
        <div className="new-expense">
          {!isEditing && <button onClick={startEditingHandler} >add new expense</button>}
          {isEditing && <ExpenseForm></ExpenseForm>}
        </div>
      )
}
export default NewExpense;