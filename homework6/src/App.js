import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

class App extends React.Component {
  state={
      todoList:[{value:"吃饭",isDone:false,id:1},{value:"喝水",isDone:false,id:2}],
      waitTodo:{value:"吃饭",isDone:false,id:0}
  }
  saveTodo=(event)=>{
    //issures
    //保存数据似乎只能在输入数据的时候保存，这样的话在不变内容添加多个时，多个id是一样的，会出问题
    //暂时找不到解决方案
    //不然只能用ref在submit的时候拿
    const todoList=this.state.todoList
    const todo={
      value:event.target.value,
      isDone:false,
      id:(todoList.length>0?todoList[todoList.length-1].id+1:1)
    }
    // console.log(todo)
    this.setState({waitTodo:todo})
  }
  addTodo=(event)=>{
    event.preventDefault();
    //...运算符赋值
    this.setState({todoList:[...this.state.todoList,this.state.waitTodo]})
  }
  deleteTodo=(event)=>{
    const id=function (){
      let k=0
      for (let i of event.target.parentNode.id){
        if (!isNaN(i)){
          return event.target.parentNode.id.slice(k)
        }
        k+=1
      }
    }()
    console.log(id)
    // const id =event.target.parentNode.id
    const todoList=this.state.todoList.filter((item)=>{
      if (item.id==id){
        return false
      }else{
        return true
      }
    })
    this.setState({todoList:todoList})
  }
  deleteTodoAll=()=>{
    this.setState({todoList:[]})
  }
  render() {
      return (
      <div className="cs-todo-x">
          <form onSubmit={this.addTodo} className="cs-form-x">
              <input type="text" placeholder="请输入您想添加的事项" className="cs-form-input" onChange={this.saveTodo}/>
              <button className="cs-form-button">添加</button>
          </form>

          <div className="cs-todo-list-x">
              <ol className="cs-todo-list">
                {this.state.todoList.map((item)=>{
                  return (<li id={"todo"+item.id} className="cs-todo">
                            <input type="checkbox" value={item.isDone} className="cs-todo-input"></input>
                            <p className='cs-todo-p'>{item.value}</p>
                            <button className="cs-todo-button" onClick={this.deleteTodo}>删除</button>
                          </li>)
                })}
              </ol>
          </div>
          <button className="cs-todo-delete" onClick={this.deleteTodoAll}>清除所有事项</button>
      </div>
      );
  }
}


export default App;
