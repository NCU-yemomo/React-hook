import React from 'react'
import {NavLink} from "react-router-dom"

export default function MyNavLink(props) {
  return (
    <NavLink className={({isActive})=>isActive?"link active":"link"} {...props}></NavLink>
  )
}
