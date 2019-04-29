import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form>
                <input
                    type='text'
                    name='title'
                    placeholder='Add Todo ...'
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
