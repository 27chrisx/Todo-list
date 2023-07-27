import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Change extends Component {

    //对接收的props进行限制
    static propTypes={
        controlTime:PropTypes.func.isRequired,
    }
    
    handleTime=()=>{
        this.props.controlTime()
    }

    render() {
        return (
            <h2 onClick={this.handleTime} className='changeTime'>🌙</h2>
        )
    }
}