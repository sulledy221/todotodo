import './Todos.css';
import { Checkbox } from './Checkbox';

export default function Todos({ todos }) {
  const renderTodos = todos.map(({ title, complete }) => {
  return (
    <div className="todocheck">
    <li key={title}>{title}</li>
    <Checkbox onClick={() => {}} defaultChecked={complete}/>
    <button className="remove">Remove</button>
    </div>
    )
  })
  return (
    <ul className="todos">
      {renderTodos}
    </ul>
  )
}