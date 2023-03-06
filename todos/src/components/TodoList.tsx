import React from "react";
import { useSelector } from "react-redux";
import { TodoState } from "../redux/store";

const TodoList: React.FC = () => {
  const items = useSelector((state: TodoState) => state.todos);

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
