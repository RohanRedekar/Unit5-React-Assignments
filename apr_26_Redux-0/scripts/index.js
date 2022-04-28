const ADD_TODO = "ADD_TODO";

const addTodo = (title, status) => {
  return {
    type: ADD_TODO,
    payload: { title: title, status: status },
  };
};

const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...store, todos: [...store.todos, action.payload] };
    default:
      return store;
  }
};
const initState = {
  todos: [],
};

const store = Redux.createStore(reducer, initState);

let container = document.getElementById("container");

const handleTodo = () => {
  let text = document.getElementById("input").value;
  let select = document.getElementById("select").value;
  store.dispatch(addTodo(text, select));
  let todos_data = store.getState().todos;
  console.log(todos_data);
  container.innerHTML = "";
  todos_data.map((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "flex");
    let p1 = document.createElement("p");
    p1.textContent = e.title;
    let p2 = document.createElement("p");
    p2.addEventListener("click", ()=> {
      if (e.status == "true") {
        console.log("yes");
        e.status = "false";
      } else {
        e.status = "true";
      }
      p2.textContent = e.status;
    });
    p2.textContent = e.status;

    div.append(p1, p2);
    container.append(div);
  });
};

document.getElementById("btn").addEventListener("click", handleTodo);
