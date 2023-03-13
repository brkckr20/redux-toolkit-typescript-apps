import React from "react";
import { useSelector } from "react-redux";
import { /* destroy, */ Todo, toogle } from "../redux/todos/todosSlice";
import { TodoState, useAppDispatch, useAppSelector } from "../redux/store";

const TodoList: React.FC = () => {
  const items = useSelector((state: TodoState) => state.todos.todos);
  let filtered = [];

  const activeFilter = useAppSelector((state) => state.todos.activeFilter);
  const dispatch1 = useAppDispatch();

  const handleDel = (id: Todo["id"]) => {
    if (confirm("Emin misiniz")) {
      // dispatch1(destroy(id));
    }
  };

  console.log("seçilen tab", activeFilter);

  switch (activeFilter) {
    case "All":
      filtered = items.filter((item) => item);
      break;
    case "Active":
      filtered = items.filter((item) => !item.completed);
    case "Completed":
      filtered = items.filter((item) => item.completed);
    default:
      filtered = items;
  }

  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch1(toogle(item.id))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDel(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
