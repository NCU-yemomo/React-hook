import React ,{useState}from 'react'
//react-router-dom自带了一个hook，useLocation，可以返回当前路径
import { useLocation } from 'react-router-dom'
export default function Inter() {
    const location = useLocation();
    const {from,pathname}=location
  return (
    <div>
        <p>the now location is{pathname},last is {from}</p>
      <button>得到当前路径</button>
    </div>
  )
}
