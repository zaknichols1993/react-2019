import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title, userId } = this.props.todo;
    return (
      <div style={divStyle}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        <p style={this.getStyle()}>
          {title}
        </p>
        <p>
          {userId}
        </p>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>Delete</button>
        <p style={{ backgroundColor: 'gray' }}>{id}</p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const divStyle = {
  backgroundColor: 'lightgray'
}

const btnStyle = {
  color: 'black',
  background: 'red',
  border: 'none',
  padding: '10px',
  float: 'right'
}

export default TodoItem
