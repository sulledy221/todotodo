import "./Todos.css";
import { Checkbox } from "./Checkbox";
import { RemoveTodo } from "./RemoveTodo";

export default function Todos({ todos, updateTodo, removeTodo }) {
  const renderTodos = todos.map(({ title, complete }, i) => {
    return (
      <div className="todocheck">
        <div className={`todocheck ${complete ? "completed" : ""}`}>
          <li key={title}>{title}</li>
          <Checkbox
            onClick={() => {
              updateTodo(i, { complete: !complete, title: "Complete" });
            }}
            defaultChecked={complete}
          />
        </div>
        <div className={`${complete ? "completed" : ""}`}>
          <RemoveTodo
            onClick={() => {
              removeTodo(i);
            }}
          />
        </div>
      </div>
    );
  });
  return <ul className="todos">{renderTodos}</ul>;
}
