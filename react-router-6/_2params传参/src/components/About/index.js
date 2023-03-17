import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavLink from '../NavLink'
export default function About() {
  return (
    <div>
      <p>这里是关于</p>
      <MyNavLink to="message">message</MyNavLink>
      <MyNavLink to="new">new</MyNavLink>
      /{/*Outlet 可以视为子路由的作用域，相当于指定子路由组件在哪里*/ }
      <Outlet />
      
    </div>
  )
}
