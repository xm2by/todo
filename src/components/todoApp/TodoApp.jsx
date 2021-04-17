import React, { Component } from "react";
import InputBox from "../inputBox/InputBox";
import Task from "../task/Task";
import "./todoApp.scss";
import { uuid, formatCurrentDate } from "../../utils/index";

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
      id: uuid(),
      createTime: formatCurrentDate(),
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
    const targetStatus = target.taskStatus;
    taskList.splice(targetIndex, 1, {
      ...target,
      taskStatus: targetStatus === "uncompleted" ? "completed" : "uncompleted",
    });
    this.setState({
      taskList,
    });
  }
  deleteTask(id) {
    const { taskList } = this.state;
    const targetIndex = taskList.findIndex((item) => item.id === id);
    taskList.splice(targetIndex, 1);
    this.setState({
      taskList,
    });
  }
  render() {
    return (
      <div className="todo-app-wrapper">
        <header className="title">TODO</header>
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
