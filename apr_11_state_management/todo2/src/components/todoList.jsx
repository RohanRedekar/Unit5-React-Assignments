import { useState } from "react";
import "./todo.css";

export const TodoList = ({ getData }) => {
  const [text, setText] = useState("");

  return (
    <div className='inputdiv'>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type='text'
        placeholder='Write Something'
      />
      <button
        onClick={() => {
          getData(text);
        }}
      >
        +
      </button>
    </div>
  );
};
