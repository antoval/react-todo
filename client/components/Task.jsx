import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import classNames from 'classnames'

export default class Task extends Component {
  constructor(props){
    super(props);
    this.state ={
      title: this.props.title,
      completed:this.props.completed,
      inputDisabled: true
    }
  }
  enableInput(){
    this.setState({
      inputDisabled: false
    });
  }
  disableInput(){
    this.setState({
      inputDisabled: true
    });
  }
  submitModifiedTask(){
    this.props.modifyTask(
      this.props.id,
      this.state.title,
      this.state.completed
    );
    this.disableInput.call(this);
  }
  handleTitleChange(event){
    this.setState({
      title: event.target.value
    });
  }
  handleCompletionChange(event){
    this.setState({
      completed: event.target.checked
    }, this.submitModifiedTask.bind(this));
  }
  removeTask(id){
    this.props.removeTask(id);
  }


  render() {
    var taskClassnames=classNames({
      task:true,
      'task--completed': this.state.completed
    });
    return (
      <div className={taskClassnames}>
        <input
          className="task__completed"
          type='checkbox'
          checked={this.state.completed}
          onChange={this.handleCompletionChange.bind(this)}
          />
        <input
          className="task__title"
          type='text'
          value={this.state.title}
          disabled={this.state.inputDisabled}
          onDoubleClick={this.enableInput.bind(this)}
          onBlur={this.submitModifiedTask.bind(this)}
          onChange={this.handleTitleChange.bind(this)}
          />
        <button
          className="task__remove"
          onClick={this.removeTask.bind(this, this.props.id)}
          >×</button>
      </div>
    )
  }
}

