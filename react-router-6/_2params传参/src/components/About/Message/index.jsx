import React from 'react'
import {Link,Outlet} from "react-router-dom"
export default function Message() {
  const message=[
    {id:1,title:"message1"},
    {id:2,title:"message2"},
    {id:3,title:"message3"},
  ]
  return (
    <div>
      <ul>
        {
          message.map((item)=>{
            return (<Link to={`detail/${item.id}`} key={item.id}>{item.title}</Link>)
          })
        }
      </ul>
      <br/>
      <Outlet/>
    </div>

  )
}
