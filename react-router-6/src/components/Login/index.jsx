import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  function pass(){
    navigate("/home")
  }
  return (
    <div>
      <p>登入窗口</p>
      <button onClick={pass}>000000</button>
    </div>
  )
}
