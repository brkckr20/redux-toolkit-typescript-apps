import React from "react";
import { useSelector } from "react-redux";
import { toogle } from "../redux/todos/todosSlice";
import { TodoState, useAppDispatch } from "../redux/store";

const TodoList: React.FC = () => {
  const items = useSelector((state: TodoState) => state.todos);
  const dispatch1 = useAppDispatch();
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch1(toogle(item.id))}
            />
            <label>{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
