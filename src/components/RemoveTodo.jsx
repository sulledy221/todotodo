import React from "react";

export const RemoveTodo = ({ onClick, removeTodo }) => (
  <button onClick={onClick} removeTodo={removeTodo}>
    Remove
  </button>
);
