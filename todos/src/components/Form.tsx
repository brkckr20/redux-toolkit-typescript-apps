import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import { useAppDispatch } from "../redux/store";

const Form = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch1 = useAppDispatch(); //custom hook

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch1(
      addTodo({ id: Math.random().toLocaleString(), title, completed: false })
    );
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default Form;
