import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import TaskList from './TaskList.jsx';
import Form from './Form.jsx';



class App extends Component {
  render() {
    const { taskFetch, submitTask, modifyTask, refreshTasks } = this.props;
    if (taskFetch.fulfilled) {
      return (
        <div>
          <Form submitTask={submitTask} refreshTasks={refreshTasks}/>
          <TaskList tasks={taskFetch.value} modifyTask={modifyTask}/>
        </div>
      )
    } else{
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default connect(props => ({
  taskFetch: {
    url:'/api/Tasks'
  },
  refreshTasks: () => ({
    taskFetch: {
      url:'/api/Tasks',
      force: true,
      refreshing: true
    }
  }),
  submitTask: title => ({
    submitTaskResponse: {
      url: `/api/Tasks/`,
      method: 'POST',
      body: JSON.stringify({
        title:title
      })
    }
  }),
  modifyTask: (taskId, title, isCompleted) => ({
    modifyTaskResponse: {
      url: `/api/Tasks/${taskId}`,
      method: 'PUT',
      body: JSON.stringify({
        title:title,
        completed:isCompleted
      })
    }
  })
}))(App)
