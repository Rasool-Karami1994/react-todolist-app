import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todo, onComplete, onEdit, onDelete }) => {
  return (
    <div className={todo.isCompleted ? "todo-row complete" : "todo-row"}>
      <div
        className="todo-text"
        onClick={onComplete}
      >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={onDelete} className="delete-icon" />
        <TiEdit onClick={onEdit} className="edit-icon" />
      </div>
    </div>
  );
};

export default Todo;
