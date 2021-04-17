import React, { useState } from "react";
import { uuid, formatCurrentDate } from "../../utils/index";
import InputBox from "../inputBox/InputBox";
import Task from "../task/Task";
import "./todoApp.less";

function TodoApp() {
  const [taskList, setTaskList] = useState([]);
  const addTask = (val) => {
    const newTask = {
      id: uuid(),
      createDate: formatCurrentDate("YYYY-MM-DD HH:mm:ss"),
      task: val,
      taskStatus: "uncomplete",
    };
    setTaskList([...taskList, newTask]);
  };
  const completeTask = (id) => {
    const targetIndex = taskList.findIndex((item) => item.id === id);
    const target = taskList[targetIndex];
    taskList.splice(targetIndex, 1, {
      ...target,
      taskStatus:
        target.taskStatus === "uncomplete" ? "complete" : "uncomplete",
    });
    // setTaskList要传入新的taskList值
    setTaskList([...taskList]);
  };
  const deleteTask = (id) => {
    const targetIndex = taskList.findIndex((item) => item.id === id);
    taskList.splice(targetIndex, 1);
    // setTaskList要传入新的taskList值
    setTaskList([...taskList]);
  };
  return (
    <div className="todo-app-wrapper">
      <header className="title">TODO</header>
      <InputBox addTask={addTask} />
      <Task
        list={taskList}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TodoApp;
