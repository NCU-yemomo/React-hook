import React ,{useState,useEffect,useRef}from 'react'
import Form from "./components/Form"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"
export default function App() {
    const [todos,setState]=useState([{
        id:1,
        value:"吃饭",
        done:false,
    }])
    const changeTodo=(todoChange)=>{
        setState(()=>todoChange)
    }
    return (
        <div className="cs-todoList-x">
            <Form changeTodo={changeTodo} todos={todos}/>
            <List todos={todos} changeTodo={changeTodo}/>
            <Footer todos={todos} changeTodo={changeTodo}/>
        </div>
    )
}
