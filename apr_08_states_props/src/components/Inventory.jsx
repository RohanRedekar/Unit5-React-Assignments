import { useState } from "react";

export const Inventory = () => {
  const [books, setbooks] = useState(10);
  const [notebooks, setnotebooks] = useState(13);
  const [pens, setpens] = useState(20);
  const [inkpens, setinkpens] = useState(16);
 
  const [counter, setCounter] = useState(0);

  //   const value = () => {
  //     for (var key in inv) {
  //       console.log(inv[key]);
  //     }
  //   };

  const handleBooks = (value) => {
    setbooks((books + value));
    // console.log(i + value);
  };
  const handlenotebooks = (value) => {
    setnotebooks(notebooks + value);
    // console.log(i + value);
  };
  const handlepens = (value) => {
    setpens(pens + value);
    // console.log(i + value);
  };
  const handleinkpens = (value) => {
    setinkpens(inkpens + value);
    // console.log(i + value);
  };

  const handleCount = (value) => {
    setCounter(counter + value);
    // console.log(i + value);
  };
  const handleMult = (value) => {
    setCounter(counter * value);
    // console.log(i + value);
  };

  // Create add and remove functions here that changes the
  // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className='items'>
        <span>Books: </span>
        <button
          onClick={() => {
            handleBooks(1);
          }}
          className='circlularButton'
        >
          +
        </button>
        <button
          onClick={() => {
            handleBooks(-1);
          }}
          className='circlularButton'
        >
          -
        </button>
        <span>{books}</span>
      </div>
      <div className='items'>
        <span>Notebooks: </span>
        <button
          onClick={() => {
            handlenotebooks(1);
          }}
          className='circlularButton'
        >
          +
        </button>
        <button
          onClick={() => {
            handlenotebooks(-1);
          }}
          className='circlularButton'
        >
          -
        </button>
        <span>{notebooks}</span>
      </div>
      <div className='items'>
        <span>Pen: </span>
        <button
          onClick={() => {
            handlepens(1);
          }}
          className='circlularButton'
        >
          +
        </button>
        <button
          onClick={() => {
            handlepens(-1);
          }}
          className='circlularButton'
        >
          -
        </button>
        <span>{pens}</span>
      </div>
      <div className='items'>
        <span>Ink Pens: </span>
        <button
          onClick={() => {
            handleinkpens(1);
          }}
          className='circlularButton'
        >
          +
        </button>
        <button
          onClick={() => {
            handleinkpens(-1);
          }}
          className='circlularButton'
        >
          -
        </button>
        <span>{inkpens}</span>
      </div>
      total: {books + notebooks + pens + inkpens}
      <div className='count'>
        <h3 className={counter % 2 === 0 ? "green" : "red"}>{counter}</h3>
        <div className='App'>
          <button
            onClick={() => {
              handleCount(1);
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              handleCount(-1);
            }}
          >
            sub
          </button>
          <button
            onClick={() => {
              handleMult(2);
            }}
          >
            double
          </button>
        </div>
      </div>
    </div>
  );
};
