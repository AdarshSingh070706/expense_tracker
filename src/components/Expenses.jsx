import './Expenses.css/';
import Card from './Card.jsx'
import React,{useState} from "react"

import ExpenseList from './ExpenseList.jsx';


const Expenses = ({items}) => {
    return(
        <>
        <div>
            <ExpenseList items={items}/>
        </div>
        </>
    )

};
export default Expenses