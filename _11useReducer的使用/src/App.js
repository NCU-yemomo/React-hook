import React,{useReducer,useRef} from 'react'
import {INCREMENT,DECREMENT,INCREMENT_BY_AMOUNT,DECREMENT_BY_AMOUNT,INCREMENT_BY_AMOUNT_ASYNC }from "./context"
//import {incrementByAmountAsync} from "./actionCreater"
const reducer=(state,action)=>{
    
    const {type,payload}=action
    switch(type){
        case INCREMENT:
            //return的会赋值state
            return {count:state.count+1}
        case DECREMENT:
            return {count:state.count-1}
        case INCREMENT_BY_AMOUNT:
            return {count:state.count+(+payload)}
        case DECREMENT_BY_AMOUNT:
            return {count:state.count+(+payload)}
        case INCREMENT_BY_AMOUNT_ASYNC:
            return {count:state.count-(+payload)}
        default:
            return state
    }
}
export default function App() {
    const value=useRef()
    //useReducer接收三个参数 reducer，initialState，init 第一个是处理函数reducer，第二个是初始值，
    //第三个是惰性初始化
    //返回两个参数，第一个是state，第二个是修改state的方法
    //整体跟redux一致
    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>
        <p>Now the all add/minus is {state.count}</p>
       <button onClick={()=>{dispatch({type:INCREMENT})}}>+</button>      
       <button onClick={()=>{dispatch({type:DECREMENT})}}>-</button>
       <input type="text" ref={value} placeholder="Please enter the value"></input>
       <button onClick={()=>{dispatch({type:INCREMENT_BY_AMOUNT,payload:value.current.value})}}>+value</button>
       <button onClick={()=>{dispatch({type:DECREMENT_BY_AMOUNT,payload:value.current.value})}}>-value</button>
        {/*useReducer暂时不支持异步操作，可能需要手动在外层进行异步操作，再进行参数传递*/}
        {/*<button onClick={()=>{dispatch(incrementByAmountAsync(value.current.value,1000))}}>+value</button>*/}    
    </div>
  )
}
