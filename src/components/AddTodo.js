import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: '',
        userId: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.userId);
        this.setState({ [e.target.name] : e.target.value });
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder='Add Todo ...'
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type='text'
                    name='userId'
                    placeholder='User Id ...'
                    value={this.state.userId}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                    style={{padding: '10px'}}
                />
            </form>
        )
    }
}

export default AddTodo
