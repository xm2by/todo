import React from "react";
import PropTypes from "prop-types";
import { classNames } from "../../utils/index";
import "./task.less";
function Task({ list, completeTask, deleteTask }) {
  return (
    <div className="task-wrapper">
      {list.map((item) => (
        <TaskItem
          key={item.id}
          info={item}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

function TaskItem({ info, completeTask, deleteTask }) {
  return (
    <div className="task-item-wrapper">
      <div className="check-box" onClick={() => completeTask(info.id)}>
        {info.taskStatus === "complete" ? (
          <i className="completed-icon iconfont icon-finish"></i>
        ) : (
          <i className="uncompleted-icon iconfont icon-circle"></i>
        )}
      </div>
      <div
        className={classNames("task-content", {
          complete: info.taskStatus === "complete",
        })}
      >
        {info.task}
      </div>
      <i
        className="delete-btn iconfont icon-delete"
        onClick={() => deleteTask(info.id)}
      ></i>
    </div>
  );
}

Task.propTypes = {
  list: PropTypes.array,
  completeTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

TaskItem.propTypes = {
  info: PropTypes.object,
  completeTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default Task;
