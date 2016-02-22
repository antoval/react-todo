import React, { Component } from 'react'
import Task from './Task.jsx';
export default class TaskList extends Component {
  render() {
    var { tasks, modifyTask } = this.props;
    return (
      <ul>
        {
          this.props.tasks.map((task)=>{
            return (
              <li key={task.id}>
                <Task {...task} modifyTask={modifyTask}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
