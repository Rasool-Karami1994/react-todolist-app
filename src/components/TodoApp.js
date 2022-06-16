import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const doneHandler = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeHandler = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };
  const updateTodo = (id, newInput) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newInput;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Rasool's Tasks</h1>
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        updateHandler={updateTodo}
        doneHandler={doneHandler}
        removeHandler={removeHandler}
      />
    </div>
  );
};

export default TodoApp;
