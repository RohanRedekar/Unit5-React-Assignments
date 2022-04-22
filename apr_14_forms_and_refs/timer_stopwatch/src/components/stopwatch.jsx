import { useState, useEffect, useRef } from "react";

export const Stopwatch = () => {
  const [ms, setMs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    let msInterval = null;
    if (isOn) {
      msInterval = setInterval(() => {
        setMs((prev) => prev + 1);
      }, 1);
    } else {
      clearInterval(msInterval);
    }
    return () => clearInterval(msInterval);
  }, [isOn]);

  useEffect(() => {
    let secInterval = null;
    if (isOn) {
      secInterval = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(secInterval);
    }
    return () => clearInterval(secInterval);
  }, [isOn]);

  useEffect(() => {
    let minInterval = null;
    if (isOn) {
      minInterval = setInterval(() => {
        setMin((prev) => prev + 1);
      }, 60000);
    } else {
      clearInterval(minInterval);
    }
    return () => clearInterval(minInterval);
  }, [isOn]);

  return (
    <div>
      <div>
        <span>min: {min % 60}</span> &nbsp;
        <span>sec: {sec % 60}</span> &nbsp;
        <span>ms: {ms % 100}</span>
      </div>
      <div>
        <input onChange={(e) => setSec(e.target.value)} type='number' />
      </div>
      <div>
        {!isOn && <button onClick={() => setIsOn(true)}>start</button>}
        {isOn && <button onClick={() => setIsOn(false)}>stop</button>}
        {!isOn && (
          <button
            onClick={() => {
              setMin(0), setSec(0), setMs(0);
            }}
          >
            reset
          </button>
        )}
      </div>
    </div>
  );
};
