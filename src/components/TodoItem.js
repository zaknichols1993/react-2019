import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: 'gray',
      padding: '10px',
      borderBottom: '1px solid black',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
      <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>Delete</button>
      </p>
        <p style={paragraphStyle}>{ this.props.priority }</p>
        <p style={{ backgroundColor: 'gray' }}>{this.props.todo.id}</p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const paragraphStyle = {
  backgroundColor: 'green'
}

const btnStyle = {
  color: 'black',
  background: 'red',
  border: 'none',
  padding: '10px',
  float: 'right'
}

export default TodoItem
