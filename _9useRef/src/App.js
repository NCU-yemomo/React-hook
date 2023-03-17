import React,{useRef} from 'react'
//useRef() 比 ref 属性更有用。它可以很方便地保存任何可变值，其类似于在 class 中使用实例字段的方式。
//请注意Ref再更新后不会重渲染
export default function App() {
  const Input=useRef(null)
  const focusOn=()=>{
    console.log(Input.current)//<input type="text"></input> 
    Input.current.focus()//
  }
  return (
    <div>
      <input type="text" ref={Input}></input>
      <button onClick={focusOn}>click focus</button>
    </div>
  )
}
