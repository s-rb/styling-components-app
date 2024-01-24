import React from "react";

import "./Task.css";

const Task = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="task-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default Task;
