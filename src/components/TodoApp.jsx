import React, { Component } from "react";
import InputBox from "./inputBox/InputBox";
import Task from "./task/Task";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
    this.addTask = this.addTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask(value) {
    const newTask = {
      id: new Date(),
      createTime: "",
      task: value,
      taskStatus: "uncompleted",
    };
    const taskList = [...this.state.taskList, newTask];
    this.setState({
      taskList,
    });
  }
  completeTask(id) {
    const { taskList } = this.state;
    const targetIndex = taskList.findIndex((item) => item.id === id);
    const target = taskList[targetIndex];
    taskList.splice(targetIndex, 1, {
      ...target,
      taskStatus: "completed",
    });
    this.setState({
      taskList,
    });
  }
  deleteTask(id) {
    const { taskList } = this.state;
    const targetIndex = taskList.find((item) => item.id === id);
    taskList.splice(targetIndex, 1);
    this.setState({
      taskList,
    });
  }
  render() {
    return (
      <div className="todo-app-wrapper">
        <InputBox addTask={this.addTask} />
        <Task
          taskList={this.state.taskList}
          completeTask={this.completeTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TodoApp;
