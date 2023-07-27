import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Footer extends Component {
  
  //对接收的props进行限制
  static propTypes={
    addTodo:PropTypes.func.isRequired,
  }
  
  handleKeyUp=(event)=>{
    //判断是否是回车按键
    if(event.keyCode !==13)return
    if(event.target.value.trim()===''){
      alert('The input content cannot be empty.')
      return
    }
    const todoObj = {id:nanoid(),name:event.target.value,done:false}
    this.props.addTodo(todoObj)
    //清空输入栏
    event.target.value=''
  }
  
  render() {
    return (
      <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="write your todos here..."/>
      </div>
    )
  }
}