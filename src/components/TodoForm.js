import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter todo please !");
      return;
    }
    props.submitTodo(input);

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <div className="formControl">
        <input
          ref={inputRef}
          type="text"
          className={props.edit ? "todo-input edit" : "todo-input"}
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? "Update your todo " : "Add todo"}
        ></input>

        <button
          className={props.edit ? "todo-button edit" : "todo-button"}
          type="submit"
        >
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
