import React from 'react'
import {useState,useEffect} from "react"
function AppHello(props){
    //设置空状态
    const [count,setCount]=useState(null)
    const [time,setTime]=useState(0)
    //果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直拥有其初始值。
    //尽管传入 [] 作为第二个参数更接近大家更熟悉的 componentDidMount 和 componentWillUnmount 思维模式，
    useEffect(()=>{
        console.log(props)
        //setTime内部箭头函数的参数是上一次的值 这样就可以自动更新了
        //详见https://beta.reactjs.org/apis/react/useState#updating-state-based-on-the-previous-state
        //这是因为调用set函数不会在已经运行的代码中更新age状态变量。(setInterval本身就在执行中！)
        //所以每个setAge (age + 1)调用都变成了setAge(43)。
        //为了解决这个问题，你可以传递一个更新函数给setAge而不是下一个状态:
        let TimeClick=setInterval(()=>{setTime((time)=>time+1)},1000)
        
        //每一次页面重新渲染时都会执行，万分注意！！
        return () => {
            //清除作用,清除作用会在每一次React重新渲染执行
            console.log("clear",props)
            clearInterval(TimeClick) 
        };
    },[time])//在time更改时清除1
    //useEffect可以返回一个函数清除副作用
    //React 会在组件销毁时执行清除操作
    //然后在后续渲染时重新执行副作用函数。
    useEffect(()=>{
        document.title=`You clicked ${count}times,and run ${time}second`
    })
    return (
        <div>
            <div>Time is {time}</div>
            <p>pass Props is{props.value}</p>
            <p>onClick times = {count}</p>
            <button onClick={()=>setCount(count+1)}>click add Count</button>
        </div>
    )
}
export default AppHello
