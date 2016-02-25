import React, { Component } from 'react'

export default class Form extends Component {
  handleSubmit(event){
    event.preventDefault();
    this.props.submitTask(this.state.taskTitle);
    event.target.reset(); //reset fields
  }
  handleTitleChange(event){
    this.setState({taskTitle: event.target.value});
  }
  componentDidUpdate(){

  }
  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit.bind(this)}
        >
        <input
          className="form__title"
          placeholder="What needs to be done?"
          type='text'
          onChange={this.handleTitleChange.bind(this)}/>
      </form>
    )
  }
}

