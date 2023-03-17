import React from 'react'
import {Navigate} from "react-router-dom"
function Home() {
  return (
    <div>
      home
    </div>
  )
}
//使用高阶组件进行路由鉴权
function AutorHome(Home){
    //taken令牌存储于cookie中   
    const state=true//浏览器自动进行一次对后端的请求，如果请求成功，就返回true，否则返回false
    console.log("令牌以给予")
    return class extends React.Component{
        render(){
            return state?<Home/>:<div>hello</div>
        }
    }
}
const newHome=AutorHome(Home)
export default newHome
