import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { /* destroy, */ Todo } from "../redux/todos/todosSlice";
import { TodoState, useAppDispatch, useAppSelector } from "../redux/store";

const TodoList: React.FC = () => {
  const items = useSelector((state: TodoState) => state.todos.todos);

  const activeFilter = useAppSelector((state) => state.todos.activeFilter);
  const dispatch1 = useAppDispatch();
  const [list, setList] = useState(items);

  const handleDel = (id: Todo["id"]) => {
    if (confirm("Emin misiniz")) {
      // dispatch1(destroy(id));
    }
  };

  useEffect(() => {
    changeList();
  }, [activeFilter]);

  const changeList = () => {
    if (activeFilter === "All") {
      setList(items);
    } else if (activeFilter === "Active") {
      const l = list.filter((i) => i.completed === false);
      setList(l);
    } else if (activeFilter === "Completed") {
      const l = list.filter((i) => i.completed === true);
      setList(l);
    }
  };

  return (
    <ul className="todo-list">
      {list.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              // onChange={() => dispatch1(toogle(item.id))}
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
