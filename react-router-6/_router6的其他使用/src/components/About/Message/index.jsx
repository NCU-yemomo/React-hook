import React from 'react'
import {Link,Outlet,useNavigate} from "react-router-dom"
export default function Message() {
  //useNavigate可以返回一个操作路由的API
  const navigate=useNavigate()
  const message=[
    {id:1,title:"message1"},
    {id:2,title:"message2"},
    {id:3,title:"message3"},
  ]
  function showDetail(item){ 
    console.log("@enter")
    navigate("detail",{
      //第二个参数的对象中只能传这两样东西，params和state请在前面的路径配置
      replace:false,
      state:{id:item.id}
    })
  }
  return (
    <div>
      <ul>
        {
          message.map((item)=>{
            return (
              <li>
                <Link to="detail" state={{id:item.id}} key={item.id}>{item.title}</Link>
                <button onClick={()=>showDetail(item)}>查看详情</button>
              </li>)
          })
        }
      </ul>
      <br/>
      <Outlet/>
    </div>

  )
}
