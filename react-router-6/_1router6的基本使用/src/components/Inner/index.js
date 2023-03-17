import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Inner(){
  return (
    <div>
      I'm Inner
      <Outlet />
    </div>
  )
}
