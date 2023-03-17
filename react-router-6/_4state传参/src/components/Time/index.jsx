import React,{useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom'

export default function Time() {
    const [time,setTime]=useState(10)
    useEffect(()=>{
        setTimeout(()=>{
            setTime((time)=>time-1)
        },1000)
    })
  return (
    <div>
        <p>Time 组件</p>
      {time>0?<p>倒计时{time}</p>:<Navigate to="/home"/>}
    </div>
  )
}
