import React ,{useRef}from 'react'
import {nanoid} from "nanoid"
import "./index.css"
export default function Form(props) {
    const input = useRef(null)
    const addTodo=()=>{
        const value=input.current.value
        if(value){
            const todo={
                id:nanoid(),
                value:value,
                done:false,
            }
            props.changeTodo([todo,...props.todos])
        }else{
            alert("输入不能为空")
        }
    }
  return (
    <div className="cs-form-x">
      <input type="text" placeholder="please enter you want to do" className="cs-form-input" ref={input}></input>
      <button onClick={addTodo} className="cs-form-button">click to add todo</button>
    </div>
  )
}
