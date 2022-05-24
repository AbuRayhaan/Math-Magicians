import { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="output">0</div>
        <button type="button" className="">AC</button>
        <button type="button">+/-</button>
        <button on type="button">%</button>
        <button type="button" className="br operators">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button on type="button">9</button>
        <button type="button" className="operators">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button on type="button">6</button>
        <button type="button" className="operators">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button" className="span-t-b">3</button>
        <button type="button" className="operators">+</button>
        <button type="button" className="zero-span2">0</button>
        <button type="button">.</button>
        <button type="button" className="operators">=</button>
      </div>
    );
  }
}

export default Calculator;
