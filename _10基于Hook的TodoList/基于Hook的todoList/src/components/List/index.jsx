import React from 'react'
import Item from '../Item'
import "./index.css"
export default function List(props) {
  const checkTodo=(id)=>{
    const newTodos=props.todos.map((item)=>{
      if (item.id!==id){
        return item
      }else{
        item.done=!item.done
        return item
      }
    })
    props.changeTodo(newTodos)
  }
  const deleteTodo=(id)=>{
    const newTodos=props.todos.filter((item)=>{
      if (item.id!=id){
        return item
      }
    })
    props.changeTodo(newTodos)
  }
  return (
    <div className="cs-list-x">
      {props.todos.map((item)=>{
        return <Item key={item.id} {...item} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
      }) }
    </div>
  )
}
