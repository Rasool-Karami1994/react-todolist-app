import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoList = ({ todos, doneHandler, updateHandler, removeHandler }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    isCompleted: false,
  });
  const editTodo = (newInput) => {
    updateHandler(edit.id, newInput);
    setEdit({ id: null, text: "" });
  };
  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => doneHandler(todo.id)}
          onEdit={() => setEdit(todo)}
          onDelete={() => removeHandler(todo.id)}
        />
      );
    });
  };
  return (
    <div>
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};

export default TodoList;
