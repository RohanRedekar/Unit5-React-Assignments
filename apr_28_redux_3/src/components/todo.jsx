import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addTodo, filter, getTodos } from "../Redux/todos/action";

export const Todo = () => {
  const todos = useSelector((store) => store.todos.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("")
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
      <input type="text" placeholder="filter todo" onChange={e => {
        // dispatch(filter(e.target.value))
        setFilter(e.target.value)
}}/>
      <select
        onChange={(e) => {
          dispatch(sort(e.target.value));
        }}
      >
        <option value='id'>Sort by id</option>
        <option value='status'>Sort by status</option>
      </select>
      <input
        value={text}
        type='text'
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add todo</button>
      {todos.filter(todo => todo.title.includes(filter)).map((t) => (
        <div key={t.title}>
          {t.id}-{t.status ? "done" : "not Done"}
          <button onClick={() => {
            dispatch(deleteTodo(t.id))
          }}>Delete</button>
          <button onClick={() => {
            dispatch(toggleTodo(t.id))
          }}>Toggle</button>
        </div>
      ))}
    </div>
  );
};
