import React from "react";
import PropTypes from "prop-types";

function Task({ list, completeTask, deleteTask }) {
  console.log(">>>Task", list);
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
      <div className="checkbox" onClick={() => completeTask(info.id)}>
        {info.taskStatus === "complete" ? (
          <i className="iconfont icon-finish"></i>
        ) : (
          <i className="iconfont icon-circle"></i>
        )}
      </div>
      <div className="task-content">{info.task}</div>
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
