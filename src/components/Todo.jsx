import { useState } from "react";
export default function Todo({ addTodo }) {
  const [text, setText] = useState();
  const handleOnClick = () => {
    addTodo({ title: text, complete: false })
    setText('')
  }
  const handleOnRemove = () => {
    // removeTodo()
    // setRemoveTodo()
  }
  return (
    <>
    <div>
      <input value = {text} onChange={({ target: { value } }) => setText(value)}/>
      <button onClick = {handleOnClick}>add</button>

    </div>
    </>
  );
}
