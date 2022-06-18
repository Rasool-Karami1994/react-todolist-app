import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import { RiTaskLine } from "react-icons/ri";
import StatusFilters from "./StatusFilters";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterTodos(status);
  });

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
    const filteredTodos = [...todos].filter((t) => t.id !== id);
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

  const filterHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div>
      <h1>Rasool's Tasks</h1>
      <div className="header-container">
        <TodoForm submitTodo={addTodo} />
        <StatusFilters onSelect={filterHandler} status={status} />
      </div>
      <TodoList
        todos={filteredTodos}
        updateHandler={updateTodo}
        doneHandler={doneHandler}
        removeHandler={removeHandler}
      />
    </div>
  );
};

export default TodoApp;
