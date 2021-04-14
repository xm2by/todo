import React, { Component } from "react";
import PropTypes from "prop-types";

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
          {taskStatus === "uncompleted" ? "待完成" : "已完成"}
        </div>
        <div className="task-content">{task}</div>
        <div className="delete-btn" onClick={() => deleteTask(id)}>
          删除
        </div>
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
