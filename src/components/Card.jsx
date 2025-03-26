import './Card.css'
const Card =(props )=>{
  const classes='card'+props.className;
  console.log(classes,"checking the classes")
  return <div className ={classes}>{props.children}</div>
}
export default Card