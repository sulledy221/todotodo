import { useState } from "react";
import Todo from "./components/Todo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([{ title: "Do Laundry", complete: true }]);
  const addTodo = (todo) => setTodos([...todos, todo]);
  const updateTodo = (index, updates) => {
    return setTodos([
      ...todos.slice(0, index),
      { ...todos[index], ...updates },
      ...todos.slice(index + 1),
    ]);
  };
  const removeTodo = (index) => {
    return setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };
  return (
    <div className="App">
      <Todo addTodo={addTodo} />
      <Todos todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
