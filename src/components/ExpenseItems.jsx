import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate.jsx'

import Card from './Card.jsx'

const ExpenseItems =({key,title,amount,date})=>{


 return(
  <li>
  <Card className='expense-item'>
    <ExpenseDate date={date}/>
    <div className='expense-item_description'>
<h2>{title}</h2>
<div className="expence-item_price">Rs.{amount}</div>
    </div>
    </Card>
</li>
 )
}

export default ExpenseItems