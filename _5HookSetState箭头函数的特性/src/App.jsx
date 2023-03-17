import React from 'react'
import { useState} from 'react'
import AppHello from "./AppHello.jsx"

export default function App() {
  const [state,setState]=useState(0)
  return (
    <div>
        <button onClick={()=>setState(state+1)}></button>
        <p>You state is {state}</p>
        <AppHello value={state}></AppHello>
    </div>
  )
}
