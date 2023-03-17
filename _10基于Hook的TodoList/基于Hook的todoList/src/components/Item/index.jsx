import React from 'react'
import "./index.css"
export default function Item(props) {
    //解构赋值
    let {id,value,done}=props
    const checkTodo =()=>{
      props.checkTodo(id)
    }
    const deleteTodo=()=>{
      props.deleteTodo(id)
    }
  return (
    <div className="cs-todo-x">
      <input className="cs-todo-check" type="checkbox" checked={done} onChange={checkTodo}></input>
      <p className="cs-todo-value">{value}</p>
      <button className="cs-todo-delete" onClick={deleteTodo}>Delete</button>
    </div>
  )
}
