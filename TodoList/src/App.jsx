import React, { Component } from 'react'


import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"
 
export default class App extends Component {
  state={
    todos:[{id:1,name:"吃饭",done:true},{id:2,name:"睡觉",done:false}]
  }
  addTodo=(todoObj)=>{
    const {todos}=this.state
    /*state重新设置后会驱动List重新渲染的*/
    this.setState({todos:[todoObj,...todos]})
  }
  deleteTodo=(id)=>{
    const {todos}=this.state
    // console.log("App.js",id,todos.filter((item)=>{
    //   if (item.id==id){
    //     return false
    //   }else{
    //     return true
    //   }
    // }))
    /*记住这种id返回格式，减少代码量*/
    this.setState({todos:todos.filter((item)=>item.id!=id)})
  }
  changeTodo=(id)=>{
    const {todos}=this.state
    const newTodos=todos.map((item=>{
      if (item.id!=id){
        return item
      }else{
        item.done=!item.done
        return item
      }
    }))
    this.setState({todos:newTodos})
  }
  deleteFinishedTodo=(idList)=>{
    this.setState({todos:this.state.todos.filter((item)=>{
      if (idList.indexOf(item.id)<0){
        return true
      }else{
        return false
      }
    })})
  }
  checkAllTodo=(done)=>{
    this.setState({todos:this.state.todos.map((item)=>{
      item.done=done
      return item
    })})
  }
  /*万分注意，这个界面一定要保存，带个自动保存吧*/
  render() {
    // console.log(this.state.todos)
    return (
      <div className='cs-APP-x'>
        {/*添加事项，智能Header传给App，App修改state再传给List，这里我们用箭头函数默认绑定this，然后用props传Header
          回调函数，这样子父组件就能联系了*/ }
        <Header addTodo={this.addTodo}/>
        <List todos={this.state.todos}  changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={this.state.todos} deleteFinishedTodo={this.deleteFinishedTodo} checkAllTodo={this.checkAllTodo}/>
      </div>
    )
  }
}
