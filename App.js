import React, { useState } from 'react';

function Calculadora() {
  const [input, setInput] = useState('');

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case '=':
        try {
          setInput(String(parseInt(input)) + '');
        } catch (error) {
          setInput('Error');
        }
        break;
      case 'C':
        setInput('');
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    <div>
      <input type="text" value={input} readOnly />
      <br />
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button value="+" onClick={handleClick}>+</button>
      <br />
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button value="-" onClick={handleClick}>-</button>
      <br />
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button value="*" onClick={handleClick}>*</button>
      <br />
      <button value="C" onClick={handleClick}>C</button>
      <button value="0" onClick={handleClick}>0</button>
      <button value="=" onClick={handleClick}>=</button>
      <button value="/" onClick={handleClick}>/</button>
    </div>
  );
}

export default Calculadora;
