import React from 'react'
import { Outlet } from 'react-router-dom'
export default function About() {
  return (
    <div>
      这里是关于
      <Outlet />
    </div>
  )
}
