import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");
  ////////////////
  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };
  ////////////////
  const clear = () => {
    setResult("");
  };
  ////////////////
  const del = () => {
    setResult(result.slice(0, -1));
  };
  /////////////////
  const plusminus = () => {
    setResult(result * -1);
  };
  /////////////////
  const percent = () => {
    setResult(result / 100);
  };
  //////////////////
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  // it does not work when the case is first positive number --> then press +- --> then another operator
  return (
    <>
      <div className="calculator">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button className="clear" onClick={clear}>
            AC
          </button>
          <button className="del" onClick={del}>
            DEL
          </button>
          <button className="plusminus" value="+-" onClick={plusminus}>
            +-
          </button>
          <button className="operators" onClick={percent}>
            %
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button className="operators" value="÷" onClick={handleClick}>
            ÷
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button className="operators" value="*" onClick={handleClick}>
            *
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button className="operators" value="+" onClick={handleClick}>
            +
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button onClick={calculate}>=</button>
          <button className="operators" value="-" onClick={handleClick}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
