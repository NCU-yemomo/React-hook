import React, { Component } from 'react'
import "./index.css"
export default class Item extends Component {
  state={
    mouse:false
  }
  delete=(id)=>{
    // console.log("item",this.props)
    // console.log("item",event.target.dataset.sign)
    this.props.deleteTodo(id)
  }
  changeDone=(id)=>{
    // console.log("item",this.props)
    /*数据别从view视图里面找！从model即props等里面找！*/
    // console.log("item",event.target.dataset.sign)
    this.props.changeTodo(id)
  }
  /*handleItem 用react来实现一下看看*/
  /*数据驱动页面更新，建议用state，千万别自己用style来修改页面，让react来，不然还是自己在操作真实dom*/
  handleItem=(flag)=>{
    console.log(flag)
    this.setState({mouse:flag})
  }
  render() {
    const {item}=this.props
    return (
      <div className='cs-todo-list'>
          <li key={item.id} className="cs-todo" onMouseEnter={()=>this.handleItem(true)} onMouseLeave={()=>this.handleItem(false)} style={{backgroundColor:this.state.mouse?"#f5f5f5":"white"}}>
          {/*<input className="cs-todo-input" type="checkbox" defaultChecked={item.done} onChange={this.changeDone} data-sign={item.id}/>*/}
          <input className="cs-todo-input" type="checkbox" checked={item.done} onChange={()=>this.changeDone(item.id)}/>
            <p className="cs-todo-p">{item.name}</p>
            {/*其实这里完全没必要datasign，用回调传item.id即可 记住一点MVC，别用原来js的什么获取属性的event.id这种方法尽量少用，因为这种数据本来就是Model里面的，根本没必要从View里面找！*/}
            {/*<button className="cs-todo-button" onClick={this.delete} data-sign={item.id} style={{display:this.state.mouse?"inline-block":"none"}}>删除</button>*/}
            <button className="cs-todo-button" onClick={()=>this.delete(item.id)} style={{display:this.state.mouse?"inline-block":"none"}}>删除</button>
          </li>
      </div>
        )
      }
  }
