import { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    const handleInput = (value) => {
        setInput(input + value);
    };

    const calculate = () => {
        try {
            setResult(eval(input));
        } catch (error) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult(0);
    };

    return (
        <div className="calculator">
            <div className="display">
                <h1>{result}</h1>
                <input type="text" value={input} readOnly />
            </div>
            <div className="buttons">
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={() => handleInput('+')}>+</button>
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('-')}>-</button>
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('*')}>*</button>
                <button onClick={() => handleInput('0')}>0</button>
                <button onClick={() => handleInput('.')}>.</button>
                <button onClick={calculate}>=</button>
                <button onClick={() => handleInput('/')}>/</button>
                <button onClick={clearInput}>C</button>
            </div>
        </div>
    );
};

export default Calculator;
