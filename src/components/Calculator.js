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

  executeCalculation(event) {
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
        <button type="button" onClick={this.executeCalculation.bind(this)}>AC</button>
        <button type="button" onClick={this.executeCalculation.bind(this)}>+/-</button>
        <button on type="button" onClick={this.executeCalculation.bind(this)}>%</button>
        <button type="button" className="br operators" onClick={this.executeCalculation.bind(this)}>÷</button>
        <button type="button" onClick={this.executeCalculation.bind(this)}>7</button>
        <button type="button" onClick={this.executeCalculation.bind(this)}>8</button>
        <button on type="button" onClick={this.executeCalculation.bind(this)}>9</button>
        <button type="button" className="operators" onClick={this.executeCalculation.bind(this)}>x</button>
        <button type="button" onClick={this.executeCalculation.bind(this)}>4</button>
        <button type="button" onClick={this.executeCalculation.bind(this)}>5</button>
        <button on type="button" onClick={this.executeCalculation.bind(this)}>6</button>
        <button type="button" className="operators" onClick={this.executeCalculation.bind(this)}>-</button>
        <button type="button" onClick={this.executeCalculation.bind(this)}>1</button>
        <button type="button" onClick={this.executeCalculation.bind(this)}>2</button>
        <button type="button" className="span-t-b" onClick={this.executeCalculation.bind(this)}>3</button>
        <button type="button" className="operators" onClick={this.executeCalculation.bind(this)}>+</button>
        <button type="button" className="zero-span2" onClick={this.executeCalculation.bind(this)}>0</button>
        <button type="button" onClick={this.executeCalculation.bind(this)}>.</button>
        <button type="button" className="operators" onClick={this.executeCalculation.bind(this)}>=</button>
      </div>
    );
  }
}

export default Calculator;
