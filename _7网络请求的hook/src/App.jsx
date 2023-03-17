import React, { useEffect } from 'react'
import { useState} from 'react'
export default function App() {
    const [state,setState]=useState(()=>{
      return "1"
    })
    // It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:
    // useEffect(() => {
    //   async function fetchData() {
    //     // You can await here
    //     const response = await MyAPI.getData(someId);
    //     // ...
    //   }
    //   fetchData();
    // }, [someId]);
    useEffect(()=>{
        async function done() {
        let response=await fetch("https://v1.hitokoto.cn?c=a")
        let data=await response.json()
        setState(data.hitokoto)
        }
        done()
      }
    ,[])
    
    const getValue=async()=>{
        let response=await fetch("https://v1.hitokoto.cn?c=a")
        let data=await response.json()
        setState(data.hitokoto)
      
    }
  return (
    <div>
      {state}
      <button onClick={getValue}>更新</button>
    </div>
  )
}
