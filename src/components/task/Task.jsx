import React, { Component } from "react";
import PropTypes from "prop-types";
import { classNames } from "../../utils/index";
import "./task.scss";

class Task extends Component {
  render() {
    const { taskList } = this.props;
    return (
      <div className="task-wrapper">
        {taskList.map((item) => (
          <TaskItem
            key={item.id}
            info={item}
            completeTask={this.props.completeTask}
            deleteTask={this.props.deleteTask}
          />
        ))}
      </div>
    );
  }
}

class TaskItem extends Component {
  render() {
    const { info, completeTask, deleteTask } = this.props;
    const { id, task, taskStatus } = info;
    return (
      <div className="task-item-wrapper">
        <div className="check-box" onClick={() => completeTask(id)}>
          {taskStatus === "uncompleted" ? (
            <i className="uncompleted-icon iconfont icon-circle"></i>
          ) : (
            <i className="completed-icon iconfont icon-finish"></i>
          )}
        </div>
        <div
          className={classNames("task-content", {
            complete: taskStatus === "completed",
          })}
        >
          {task}
        </div>
        <i
          className="delete-btn iconfont icon-delete"
          title="删除"
          onClick={() => deleteTask(id)}
        ></i>
      </div>
    );
  }
}

Task.propTypes = {
  taskList: PropTypes.array,
  completeTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

TaskItem.propTypes = {
  info: PropTypes.object,
  completeTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default Task;
