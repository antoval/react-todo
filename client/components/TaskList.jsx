import React, { Component } from 'react'
import Task from './Task.jsx';
export default class TaskList extends Component {
  render() {
    var { tasks, modifyTask, removeTask, refreshTasks} = this.props;
    return (
      <ul className="tasklist">
        {
          this.props.tasks.map((task)=>{
            return (
              <li
                className="tasklist__item"
                key={task.id}
                >
                <Task {...task} modifyTask={modifyTask} removeTask={removeTask}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
