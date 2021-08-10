import { useState } from "react";
export default function Todo({ addTodo }) {
  const [text, setText] = useState();
  const handleOnClick = () => {
    addTodo({ title: text, complete: false });
    setText("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
          <button type="submit" onClick={handleOnClick}>
            add
          </button>
        </form>
      </div>
    </>
  );
}
