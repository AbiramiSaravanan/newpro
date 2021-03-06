import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Content from './components/Page/Content';

import uuid from 'uuid';



class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title:'task no 1',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'task no 2',
        completed:false
      },
      { 
        id:uuid.v4(),
        title:'task no 3',
        completed:false
      }
    ]
    
  }
  markComplete =(id) =>{
    this.setState({todos:this.state.todos.map(todo =>{
      if(todo.id===id){
        todo.completed=!todo.completed}

      
      return todo;
     }) });
  }
  
  delTodo =(id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id!==id)]});
  }

  addTodo =(title) =>{
    const newTodo={
      id: uuid.v4(),
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos, newTodo]});
  }
  render() {   
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header />
        <Route exact path="/" render={props =>(
          <React.Fragment>
           <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
          </React.Fragment>
        )}/>
       
        <Route path="/Content" component={Content}/>
        
       
       
        </div>
        </div>
        </Router>
    );
  }
}


export default App;
