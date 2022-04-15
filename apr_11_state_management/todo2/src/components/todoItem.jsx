import { useState } from "react";
import * as url from "./delete.png";
import "./todo.css";

export const TodoItem = ({ todo, handleStatus }) => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <div className='todosdiv'>
        <div onClick={() => handleStatus(todo.id)}>
          <input
            className='checkbox'
            type='checkbox'
            name=''
            id=''
            checked={todo.status}
          />
          <span className={todo.status ? "crossout" : null}>{todo.title}</span>
        </div>
        <div
          onClick={() => {
            setShow(!show);
          }}
        >
          <img className='del_logo' src={url.default} alt='' />
        </div>
      </div>
    );
  } else {
    return null;
  }
};
