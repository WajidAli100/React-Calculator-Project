'use client';

import { useState } from 'react';
import Keypad from './Keypad';
import Display from './Display';
import History from './History';

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState('');  // Client-side state for input
    const [result, setResult] = useState(0);  // Client-side state for result
    const [history, setHistory] = useState([]);  // Client-side history state

    const addToHistory = (expression, result) => {
        const newEntry = {
            expression,
            result,
            timestamp: new Date().toLocaleString(),
        };
        setHistory([newEntry, ...history]);
    };

    const handleCalculation = () => {
        if (!currentInput) {
            setResult(0);  // If input is empty, reset result
            return;
        }

        try {
            const evalResult = eval(currentInput);  // Evaluating the input expression
            setResult(evalResult);
            addToHistory(currentInput, evalResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div>
            <Display currentInput={currentInput} result={result} />
            <Keypad
                currentInput={currentInput}
                setCurrentInput={setCurrentInput}
                handleCalculation={handleCalculation}
                setResult={setResult}
            />
            <History history={history} />
        </div>
    );
};

export default Calculator;
