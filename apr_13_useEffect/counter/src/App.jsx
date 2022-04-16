import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [end, setEnd] = useState(0);
  const [counter, setCounter] = useState(-1);

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter((prevValue) => {
        if (prevValue >= end - 1) {
          clearInterval(timer);
          return 0;
        }
        return parseInt(prevValue) + 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [end]);

  return (
    <div className='App'>
      <h2>count is: {counter}</h2>
      <div className='inputdiv'>
        <input
          onChange={(e) => {
            setCounter(e.target.value);
          }}
          type='number'
          placeholder='Start'
        />
        <input
          onChange={(e) => {
            setEnd(e.target.value);
          }}
          type='number'
          placeholder='End'
        />
      </div>
    </div>
  );
}

export default App;
