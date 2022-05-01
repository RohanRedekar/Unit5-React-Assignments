export const ADD_TODO = "ADD_TODO";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const getTodos = () => async (dispatch) => {
  const data = fetch("http://localhost:8080/todos")
    .then((res) => res.json())
    .then((data) => {
      dispatch(addTodo(data));
    });
};
