import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  
  //对接收的props进行限制
  static propTypes={
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    page:PropTypes.string.isRequired
  }

  render() {
    let {todos}=this.props
    if(this.props.page==='active')
      todos=todos.filter((todoObj)=>{
        return todoObj.done===false
      })
    if(this.props.page==='completed')
      todos=todos.filter((todoObj)=>{
        return todoObj.done===true
      })
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}/>
          })
        }    
      </ul>
    )
  }
}