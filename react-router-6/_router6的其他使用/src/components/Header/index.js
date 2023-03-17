import React ,{useRef}from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const text=useRef()
    const navigate=useNavigate()
    const back=(current)=>{
        console.log(current)
        console.log(current.clientX)
        navigate(-1)
    }
    const forward=()=>{
        navigate(1)
    }
    const remove=()=>{
        text.current.style.backgroundColor="orange"
    }
  return (
    <div>
      <p>React-router-dom@6</p>
      <button onClick={(current)=>back(current)}>后退</button>
      <button onClick={forward}>前进</button>
      <button onClick={remove}>删除</button>
      <p ref={text}>我是要被隐藏的玩意</p>
    </div>
  )
}
