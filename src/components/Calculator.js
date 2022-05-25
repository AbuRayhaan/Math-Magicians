import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = state;

  const executeCalculation = (event) => {
    const calcButtons = event.target.innerText;
    const calculatorButton = calcButtons;
    const obj = state;
    setState(calculate(obj, calculatorButton));
  };

  return (
    <div className="calc-container">
      <div className="output">{ next || operation || total || 0 }</div>
      <button type="button" onClick={executeCalculation}>AC</button>
      <button type="button" onClick={executeCalculation}>+/-</button>
      <button on type="button" onClick={executeCalculation}>%</button>
      <button type="button" className="br operators" onClick={executeCalculation}>÷</button>
      <button type="button" onClick={executeCalculation}>7</button>
      <button type="button" onClick={executeCalculation}>8</button>
      <button on type="button" onClick={executeCalculation}>9</button>
      <button type="button" className="operators" onClick={executeCalculation}>x</button>
      <button type="button" onClick={executeCalculation}>4</button>
      <button type="button" onClick={executeCalculation}>5</button>
      <button on type="button" onClick={executeCalculation}>6</button>
      <button type="button" className="operators" onClick={executeCalculation}>-</button>
      <button type="button" onClick={executeCalculation}>1</button>
      <button type="button" onClick={executeCalculation}>2</button>
      <button type="button" className="span-t-b" onClick={executeCalculation}>3</button>
      <button type="button" className="operators" onClick={executeCalculation}>+</button>
      <button type="button" className="zero-span2" onClick={executeCalculation}>0</button>
      <button type="button" onClick={executeCalculation}>.</button>
      <button type="button" className="operators" onClick={executeCalculation}>=</button>
    </div>
  );
};

export default Calculator;
