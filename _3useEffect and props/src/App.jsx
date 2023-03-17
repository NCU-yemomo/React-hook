import React from 'react'
import {useState,useEffect} from "react"
function App(props){
    //设置空状态
    const [count,setCount]=useState(null)
    const [time,setTime]=useState(0)
    let TimeClick=setInterval(()=>{setTime(time+1)},1000)
    //useEffect可以返回一个函数清除副作用
    //React 会在组件销毁时执行清除操作
    //然后在后续渲染时重新执行副作用函数。
    useEffect(()=>{
        document.title=`You clicked ${count}times,and run ${time}second`
        return () => {
            //清除作用
          clearInterval(TimeClick)
        };
    })
    return (
        <div>
            <div>Time is {time}</div>
            <p>pass Props is</p>
            <p>onClick times = {count}</p>
            <button onClick={()=>setCount(count+1)}>click add Count</button>
        </div>
    )
}
export default App
