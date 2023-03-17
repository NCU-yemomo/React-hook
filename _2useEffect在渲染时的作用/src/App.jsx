import React from 'react'
import { useState,useEffect } from 'react'
export default function App() {
  //useEffect() 相当于component的生命周期 例如componentDidMount
  //componentDidUpdate
  //componentWillUnmount 
  const [count,setCount]=useState(0)
  //相当于componentDidMount componentDidUpdate
  useEffect(()=>{
    document.title=`You clicked ${count}times`
  })
  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={()=>setCount(count+1)}>click add Count</button>
    </div>
  )
}
