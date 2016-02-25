import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import TaskList from './TaskList.jsx';
import Form from './Form.jsx';
import Footer from './Layout/Footer.jsx';
import '../styles/main.scss';
import classNames from 'classNames';

var oldSubmitTaskResponse,oldRemoveTaskResponse, oldModifyTaskResponse;

class App extends Component {
  componentDidMount(){
    this.props.refreshTasks()
  }
  componentDidUpdate(){
    //check if updated (can and should be optimized)
    var {  submitTaskResponse, removeTaskResponse, modifyTaskResponse, refreshTasks } = this.props;
    if(submitTaskResponse && submitTaskResponse != oldSubmitTaskResponse && submitTaskResponse.fulfilled){
      oldSubmitTaskResponse = submitTaskResponse;
      refreshTasks();
    }
    if(removeTaskResponse && removeTaskResponse != oldRemoveTaskResponse && removeTaskResponse.fulfilled){
      oldRemoveTaskResponse = removeTaskResponse;
      refreshTasks();
    }
    if(modifyTaskResponse && modifyTaskResponse != oldModifyTaskResponse && modifyTaskResponse.fulfilled){
      oldModifyTaskResponse = modifyTaskResponse;
      refreshTasks();
    }


  }
  render() {
    var {  submitTask, removeTask, modifyTask, taskFetchResponse } = this.props;

    if (taskFetchResponse && taskFetchResponse.fulfilled) {
      return (
        <div className="app">
          <h1 className="app__title">todos</h1>
          <Form submitTask={submitTask} />
          <TaskList tasks={this.props.taskFetchResponse.value} removeTask={removeTask} modifyTask={modifyTask}/>
          <Footer/>
        </div>
      )
    } else{
      return (
        <div className="app__updating-notice">Refreshing...</div>
      )
    }
  }
}

export default connect(props => ({
  refreshTasks: () => ({
    taskFetchResponse: {
      url:'/api/Tasks',
      force: true,
      refreshing: false
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
  removeTask: taskId => ({
    removeTaskResponse: {
      url: `/api/Tasks/${taskId}`,
      method: 'DELETE'
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
