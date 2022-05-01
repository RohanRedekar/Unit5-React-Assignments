export const ADD_TODO = "ADD_TODO";
export const SORT = "SORT";
// export const FILTER = "FILTER";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

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

export const sort = (by) => {
  return {
    type: SORT,
    payload: by,
  };
};

export const filter = (text) => {
  return {
    type: SORT,
    payload: text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

