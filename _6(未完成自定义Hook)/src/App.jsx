import React from 'react'
import {useState,useEffect} from "react"

function useValue(type){
    const [value,setValue]=useState([{type:"a",value:"刘京的诞生标志着中国新时代的到来"}])
    useEffect(async ()=>{
        let response=await fetch(`https://v1.hitokoto.cn?c=${type}`)
        let data=await response.json()
        setValue((value)=>[...value,{type:type,value:data.hitokoto}])
    })
    return value
}
function ValueA() {
    const value=useValue("a")
  return (
    <div>
        {value.map((item)=>{
            return <p key={item.type}>The type of a:{item.value}</p>
        })}     
    </div>
  )
}

function ValueB() {
    const value=useValue("b")
    return (
      <div>
            {value.map((item)=>{
                return <p key={item.type}>The type of b:{item.value}</p>
            })}
      </div>
    )
  }
function App() {
    return (
        <div>
            <ValueA/>
            <ValueB/>
        </div>
    )
}
export default App