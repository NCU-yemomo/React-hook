import React, { Component } from 'react'
import PropTypes from "prop-types"
import Item from '../Item'
import "./index.css"
export default class List extends Component {
  //进行类型限制
  static propTypes={
    changeTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired
  } 
  render() {
    console.log("List",this.props)
    return (
      <div className="cs-List-x">
        {
          this.props.todos.map((item)=>{
          return <Item item={item} deleteTodo={this.props.deleteTodo} changeTodo={this.props.changeTodo}/>
        })
      }
      </div>
    )
  }
}
