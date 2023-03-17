import React, { Component } from 'react'
import PropTypes from "prop-types"
/*引入nanoid，nanoid函数可以生成唯一一个uuid*/
import {nanoid} from "nanoid"
import "./index.css"
export default class Header extends Component {
  static propTypes={
    addTodo:PropTypes.func.isRequired
  } 
  /*添加todo方法*/
  add=(event)=>{
    console.log(event.key)
    const {key,target}=event

    if (key!="Enter") return
    if (target.value.trim()===""){
      alert("请输入内容")
      return
    }
    const todoObj={
      id:nanoid(),
      name:target.value,
      done:false,
    }
    this.props.addTodo(todoObj)
    target.value=""
  }
  render() {
    return (
      <div className="cs-form-x">
        <input type="text" placeholder="请输入您想做的事" className="cs-form-input" onKeyDown={this.add}></input>
      </div>
    )
  }
}
