import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import CalculatorPage from './pages/CalculatorPage';
import Navbar from './pages/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calculator" element={<CalculatorPage />} />
            <Route exact path="/quotes" element={<Quotes />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
