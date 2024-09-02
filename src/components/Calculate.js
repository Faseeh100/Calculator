import React, { useState } from 'react';
import './styles.css'; // Add your CSS here
import '../App.css'
import { formToJSON } from 'axios';


function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      setResult(eval(input)); // Use eval to calculate the result
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
    <h1>Calculator</h1>
    <div className='calculator'>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="span-two">AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={() => handleClick('/')}>÷</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('0')}>0</button>    
        <button onClick={handleEvaluate} className="span-two">=</button>
        
        
      </div>
    </div>
    </div>
  );
}

export default Calculator;
