import { useState } from 'react';
import Todo from './components/Todo'
import Todos from './components/Todos'
import './App.css';
// const dummy = [
//   {title: 'text'},
//   {completed: Boolean}
// ]
function App() {
  const [todos, setTodos] = useState([
    { title: 'Do Laundry', complete: true },
  ]);
  const addTodo = todo => setTodos([...todos, todo])
  return (
    <div className="App">
      <Todo addTodo={addTodo} />
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
