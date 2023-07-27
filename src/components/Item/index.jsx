import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  
  //对接收的props进行限制
  static propTypes={
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    done:PropTypes.bool.isRequired,
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }
  
  state={mouse:false,check:this.props.done}
  
  handleMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

  handleDelete=(id)=>{
    this.props.deleteTodo(id)
  }
  
  render() {
    return (
      <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={this.props.done} onChange={this.handleCheck(this.props.id)}/>
          <span style={{textDecoration:this.props.done?'line-through':'auto'}}>{this.props.name}</span> 
        </label>
        <button onClick={()=>{this.handleDelete(this.props.id)}} className="btn btn-danger" style={{display:this.state.mouse?'block':'none'}}>Delete</button>
      </li>
    )
  }
}