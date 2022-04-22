import { useState } from "react";
import "./App.css";
import { Stopwatch } from "./components/stopwatch";
import { Timer } from "./components/timer";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Stopwatch" : "Timer"}
      </button>
      {show ? <Timer /> : <Stopwatch />}
    </div>
  );
}

export default App;
