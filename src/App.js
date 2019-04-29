import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'wash dishes',
        priority: 'high',
        completed: false
      },
      {
        id: 2,
        title: 'walk dog',
        priority: 'medium',
        completed: true
      },
      {
        id: 3,
        title: 'find aliens',
        priority: 'low',
        completed: false
      }
    ]
  } 

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed =!todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      <AddTodo />
      </div>
    );
  }
}

export default App;
