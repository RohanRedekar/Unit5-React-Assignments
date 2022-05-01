import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addTodo, getTodos } from "../Redux/todos/action";

export const Todo = () => {
  const todos = useSelector((store) => store.todos.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleAdd = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:8080/todos", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => setText(""))
      // .then(getData);
      .then(() => {
        dispatch(getTodos());
      });
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   fetch("http://localhost:8080/todos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch(addTodo(data));
  //     });
  // };

  return (
    <div>
      <input
        value={text}
        type='text'
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add todo</button>
      {todos.map((t) => (
        <div key={t.title}>{t.title}</div>
      ))}
    </div>
  );
};
