import React,{Component} from 'react'
import Change from './components/Change'
import Title from './components/Title'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import Tail from './components/Tail'
import './App.css'

export default class App extends Component{
  
  //初始化状态
  state={todos:[
    {id:'001',name:'☕ To go for afternoon tea',done:true},
    {id:'002',name:'👕 To buy clothes',done:true},
    {id:'003',name:'🏓 To play ping pong',done:true},
    {id:'004',name:'🍜 To cook',done:true},
    {id:'005',name:'⚛️ To code a react app',done:false}
  ],page:'all',time:'day'}

  //添加一个Todo
  addTodo=(todoObj)=>{
    this.setState({todos:[...this.state.todos,todoObj]})
  }
  
  //更新Todo的done状态
  updateTodo=(id,done)=>{
    const {todos}=this.state
    const newtodos=todos.map((todoObj)=>{
      if(todoObj.id===id)return{...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newtodos})
  }

  //删除一项Todo
  deleteTodo=(id)=>{
    const {todos}=this.state
    const newtodos=todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({todos:newtodos})
  }

  //删除所有已完成的项
  deleteAllTodos=()=>{
    const {todos}=this.state
    const newtodos=todos.filter((todoObj)=>{
      return todoObj.done===false
    })
    this.setState({todos:newtodos})
  }

  //翻页
  changePage=(page)=>{
    this.setState({page:page})
  }

  //修改主题
  controlTime=()=>{
    this.setState({time:this.state.time==='day'?'night':'day'})
    console.log(this.state.time)
  }

  render(){
    return(
      <div>
        {/* <Change controlTime={this.controlTime}/> */}
        <div className={this.state.time==='day'?"todo-container":"todo-container-dark"}>
          <Title/>
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} page={this.state.page}/>
            <Footer todos={this.state.todos} deleteAllTodos={this.deleteAllTodos} changePage={this.changePage} page={this.state.page}/>
          </div>
          <Tail/>
        </div>
      </div>
    )
  }
}