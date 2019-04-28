import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'wash dishes',
        completed: false
      },
      {
        id: 2,
        title: 'walk dog',
        completed: false
      },
      {
        id: 3,
        title: 'find aliens',
        completed: false
      }
    ]
  } 

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
      <Todos todos={this.state.todos} />
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
