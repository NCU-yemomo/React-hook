import React ,{useContext,useState,useEffect}from 'react'
import ThemeContext from './Context.js'

export default function App() {
    //大概就是Context可以订阅上下文
    const Context=useContext(ThemeContext)
    console.log(Context)
    //dark: {color: 'cornsilk', backgroundColor: '#000000'}
    //light: {color: 'lightblue', backgroundColor: '#ffffff'}
  return (
    <div>
      <p style={Context.light}>The style of It</p>
    </div>
  )
}
