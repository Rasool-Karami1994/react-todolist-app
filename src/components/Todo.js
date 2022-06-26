import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { MdDoneOutline } from "react-icons/md";
const Todo = ({ todo, onComplete, onEdit, onDelete }) => {
  return (
    <div className={todo.isCompleted ? "todo-row complete" : "todo-row"}>
      <div>{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine onClick={onDelete} className="delete-icon" />
        <TiEdit onClick={onEdit} className="edit-icon" />
        <MdDoneOutline className="done-icon" onClick={onComplete} />
      </div>
    </div>
  );
};

export default Todo;
