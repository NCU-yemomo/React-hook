import React from 'react'
import {useRoutes,Route,Routes} from "react-router-dom"
import "./App.css"
import Login from './components/Login'
import Home from './components/Home'
import routes from './route/route'
export default function App() {
  const element=useRoutes(routes)
  return (
    <div>
      <p>hello</p>
      <Home/>
    </div>
  )
}
