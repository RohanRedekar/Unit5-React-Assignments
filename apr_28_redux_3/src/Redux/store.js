import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { counterReducer } from "./counter/reducer";
import { todosReducer } from "./todos/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

// const middleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch);
//   }
//   next(action);
// };

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log("subscribe", store.getState());

// { counter: 0, todos: [] }
//when there is change in store this functio gets triggered
// store.subscribe(() => {
//   console.log("subscribe", store.getState());
// });
