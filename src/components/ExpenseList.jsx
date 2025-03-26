import ExpenseItems from "./ExpenseItems";
import './ExpenseList.css';

const ExpenseList = ({items}) => {
if(items.length==0){
  return <h2 className="">Found no Expense</h2>

}

  return(
      <ul className='expenses-list'>
          {items.map((expenses)=>
          (<ExpenseItems
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}/>

          ))
          };
      </ul>
  )

};

export default ExpenseList