import React, { Component } from 'react'

export default class Form extends Component {
  handleSubmit(event){
    event.preventDefault();
    this.props.submitTask(this.state.taskTitle);
    this.props.refreshTasks();
    event.target.reset(); //reset fields
  }
  handleTitleChange(event){
    this.setState({taskTitle: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' onChange={this.handleTitleChange.bind(this)}/>
        <input type='submit'/>
      </form>
    )
  }
}

