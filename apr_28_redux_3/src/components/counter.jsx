import { addCount } from "../Redux/counter/action";
import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
    const counter = useSelector((store) => store.counter.counter);
    // const state = store.getState();
    const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter:{counter}</h3>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add 1
      </button>
    </div>
  );
};
