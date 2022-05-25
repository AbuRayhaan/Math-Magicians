import { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: null,
      next: null,
      total: null,
    };
  }

  Calculation(event) {
    this.calcButtons = event.target.innerText;
    const calculatorButton = this.calcButtons;
    const obj = this.state;
    this.setState(calculate(obj, calculatorButton));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="calc-container">
        <div className="output">{ next || operation || total || 0 }</div>
        <button type="button" onClick={this.Calculation.bind(this)}>AC</button>
        <button type="button" onClick={this.Calculation.bind(this)}>+/-</button>
        <button on type="button" onClick={this.Calculation.bind(this)}>%</button>
        <button type="button" className="br operators" onClick={this.Calculation.bind(this)}>÷</button>
        <button type="button" onClick={this.Calculation.bind(this)}>7</button>
        <button type="button" onClick={this.Calculation.bind(this)}>8</button>
        <button on type="button" onClick={this.Calculation.bind(this)}>9</button>
        <button type="button" className="operators" onClick={this.Calculation.bind(this)}>x</button>
        <button type="button" onClick={this.Calculation.bind(this)}>4</button>
        <button type="button" onClick={this.Calculation.bind(this)}>5</button>
        <button on type="button" onClick={this.Calculation.bind(this)}>6</button>
        <button type="button" className="operators" onClick={this.Calculation.bind(this)}>-</button>
        <button type="button" onClick={this.Calculation.bind(this)}>1</button>
        <button type="button" onClick={this.Calculation.bind(this)}>2</button>
        <button type="button" className="span-t-b" onClick={this.Calculation.bind(this)}>3</button>
        <button type="button" className="operators" onClick={this.Calculation.bind(this)}>+</button>
        <button type="button" className="zero-span2" onClick={this.Calculation.bind(this)}>0</button>
        <button type="button" onClick={this.Calculation.bind(this)}>.</button>
        <button type="button" className="operators" onClick={this.Calculation.bind(this)}>=</button>
      </div>
    );
  }
}

export default Calculator;
