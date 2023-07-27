import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    
    //对接收的props进行限制
    static propTypes={
        todos:PropTypes.array.isRequired,
        deleteAllTodos:PropTypes.func.isRequired,
        changePage:PropTypes.func.isRequired,
        page:PropTypes.string.isRequired
    }
    
    handleAll=()=>{
        this.props.deleteAllTodos();
    }

    handle1=()=>{
        this.props.changePage('all');
    }

    handle2=()=>{
        this.props.changePage('active');
    }

    handle3=()=>{
        this.props.changePage('completed');
    }

    render() {
        const number=this.props.todos.filter((todoObj)=>{
            return todoObj.done===false
        }).length
        return (
            <div className="todo-footer">
                <span>
                    <span>{number} thing{'(s)'} left</span>
                    <button className="btn btn-danger" onClick={this.handleAll}>Clear Completed</button>
                    <button className="btn btn-sortsEnd" onClick={this.handle3} style={{borderColor:this.props.page==='completed'?'black':'white'}}>completed</button>
                    <button className="btn btn-sorts" onClick={this.handle2} style={{borderColor:this.props.page==='active'?'black':'white'}}>active</button>
                    <button className="btn btn-sorts" onClick={this.handle1} style={{borderColor:this.props.page==='all'?'black':'white'}}>all</button>  
                </span>
            </div>
        )
    }
}