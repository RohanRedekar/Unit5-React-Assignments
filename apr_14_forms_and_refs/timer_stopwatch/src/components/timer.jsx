import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [ms, setMs] = useState(1);
  const [sec, setSec] = useState(1);
  const [min, setMin] = useState(1);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    let msInterval = null;
    if (isOn && ms > 0) {
      msInterval = setInterval(() => {
        setMs((prev) => prev > 0 ? prev - 1 : prev);
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
        setSec((prev) => (prev > 0 ? prev - 1 : prev));
      }, 1000);
    } else {
      clearInterval(secInterval);
    }
    return () => clearInterval(secInterval);
  }, [isOn]);

  useEffect(() => {
    let minInterval = null;
    if (isOn && min > 0) {
      minInterval = setInterval(() => {
        setMin((prev) => (prev > 0 ? prev - 1 : prev));
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
              setMin(1), setSec(1), setMs(1);
            }}
          >
            reset
          </button>
        )}
      </div>
    </div>
  );
};
