export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <div className='todosdiv'>
      <div>{todo.title}</div>
      <div>
        <div
          className={todo.status ? "colour_effect coloured" : "coloured"}
          onClick={() => handleStatus(todo.id)}
        ></div>
      </div>
    </div>
  );
};
