//useState单独传出
import React, { useState } from 'react'
//Hook
function App(){
    //设置count为0，settCount为更新count的函数
    //相当于class的state和setState
    //Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数
    const [count,setCount]=useState(0)
    const [fruit,setFruit]=useState("Apple")
    const [todos,setTodos]=useState([{
        text:"Learn Hooks"
    }])
    return (
        <div>
        <p>please enter the button</p>
        <p>Current value is {count}</p>
        <p>Current fruit is {fruit}</p>
        <div className="todos">
            {todos.map((item)=>{
                return <p>{item.text}</p>
            })}
        </div>
        <button onClick={()=>setCount(count+1)}> Value +1</button>
        <button onClick={()=>setFruit("banana")}>Fruit change</button>
        <button onClick={()=>setTodos([...todos,{text:"Learn Hooks"}])}>Todos Add</button>
        </div>
    )
}

export default App 