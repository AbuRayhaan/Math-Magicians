import React from 'react';
import Calculator from '../components/Calculator';

const CalculatorPage = () => (
  <>
    <div className="cal-box">
      <p>Let&apos;s do some Maths!</p>
      <div className="wrapper">
        <Calculator />
      </div>
    </div>
  </>
);

export default CalculatorPage;
