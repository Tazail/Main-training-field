import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setShmount] = useState(0);
  const minus = () => setShmount((prev) => prev - 1);
  const plus = () => setShmount((prev) => prev + 1);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log("change");
  }, [toggle]);

  return (
    <>
      <div className="wrapper">
        <button className="button" onClick={minus}>
          -
        </button>
        <div className="box">{count}</div>
        <button className="button" onClick={plus}>
          +
        </button>
        <button className="button" onClick={() => setShmount(0)}>
          Reset
        </button>
        {toggle ? "on" : "off"}
        <button
          className="button"
          onClick={() =>
            setToggle((prev) => {
              prev = !prev;
            })
          }>
          Toggle
        </button>
      </div>
      {/* <div className="wrapper">
        <button className="button" onClick={() => setShmount(count - 1)}>
          -
        </button>
        <div className="box">{count}</div>
        <button className="button" onClick={() => setShmount(count + 1)}>
          +
        </button>
        <button className="button" onClick={() => setShmount(0)}>
          Reset
        </button>
      </div> */}
    </>
  );
}

export default App;
