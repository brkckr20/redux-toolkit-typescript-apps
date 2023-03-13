import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { changeActive, clearCompleted } from "../redux/todos/todosSlice";

const ContentFooter = () => {
  const items = useAppSelector((state) => state.todos.todos);
  const activeFilter = useAppSelector((state) => state.todos.activeFilter);
  const itemsLeft = items.filter((item) => item.completed).length;

  const dispatch = useAppDispatch();

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft} </strong>
        item{itemsLeft > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={`${activeFilter === "All" ? "selected" : ""}`}
            onClick={() => dispatch(changeActive("All"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={`${activeFilter === "Active" ? "selected" : ""}`}
            onClick={() => dispatch(changeActive("Active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={`${activeFilter === "Completed" ? "selected" : ""}`}
            onClick={() => dispatch(changeActive("Completed"))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
