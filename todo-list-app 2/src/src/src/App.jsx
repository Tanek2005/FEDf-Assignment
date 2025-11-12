import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Button par click handle karna
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Calculate result (= button)
  const handleCalculate = () => {
    try {
      // 'eval' ka istemaal simple math ke liye, lekin savdhaani se
      const calculatedResult = eval(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear (AC) button
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Backspace (C) button
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

IS
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{result ? result : ''}</div>
        <div className="current-operand">{input || '0'}</div>
      </div>
      <button onClick={handleClear} className="span-two">AC</button>
      <button onClick={handleBackspace}>C</button>
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
      <button onClick={handleCalculate} className="span-two">=</button>
    </div>
  );
}

export default App;