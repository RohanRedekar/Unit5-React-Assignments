import { useState } from "react";
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";
import { nanoid } from "nanoid";
import "./todo.css";

function Todo() {
  const [todosList, setTodosList] = useState([]);

  const getData = (todo) => {
    const payload = {
      title: todo,
      status: false,
      id: nanoid(5),
    };
    setTodosList([...todosList, payload]);
  };
  const handleStatus = (id) => {
    setTodosList(
      todosList.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
    );
  };
  return (
    <div>
      {todosList.map((e) => (
        <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
      ))}
        <TodoList getData={getData} />
      </div>
  );
}

export { Todo };
