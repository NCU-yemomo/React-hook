import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {
  deleteAll=()=>{
    const idList=this.props.todos.map((item)=>{
       if (item.done){
          return item.id
       }
    })
    console.log("footer",idList)
    this.props.deleteFinishedTodo(idList)
  }
  /*不建议这么干，这么干还是在自己操作真实DOM*/
  renderButton=()=>{
    console.log("footer-button",this.button)
    if (this.FinishedNum>0){
      this.button.style.display="inline-block"
    }else{
      this.button.style.display="none"
    }
  }
  checkAllTodos=(done)=>{
    this.props.checkAllTodo(done)
  }
  render() {
    this.FinishedNum=this.props.todos.filter((item)=>item.done?true:false).length
    console.log("Footer" ,this.props)
    return (
      <div className="cs-footer-x">
        <div className="cs-footer-form">
          <input className="cs-footer-input" type="checkbox" checked={this.FinishedNum===this.props.todos.length && this.FinishedNum!=0?true:false} onChange={(c)=>this.checkAllTodos(c.target.checked)}/>
          <p className="cs-footer-p">已完成{this.FinishedNum}/全部{this.props.todos.length}</p>
        </div>
        <button className="cs-footer-button" onClick={this.deleteAll} ref={(c)=>this.button=c}>清除已完成任务</button>
      </div>
    )
  }
  componentDidUpdate(){
    this.renderButton()
  }
  componentDidMount(){
    this.renderButton()
  }
}
