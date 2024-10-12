import { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = ({ addToHistory }) => {
    const [currentInput, setCurrentInput] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculation = () => {
        try {
            const evalResult = eval(currentInput);  // Use with caution, math parser libraries are better in prod.
            setResult(evalResult);
            addToHistory(currentInput, evalResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-20 bg-slate-300  text-gray-900 rounded-lg shadow-lg p-4">
            <Display currentInput={currentInput} result={result} />
            <Keypad
                currentInput={currentInput}
                setCurrentInput={setCurrentInput}
                handleCalculation={handleCalculation}
            />
        </div>
    );
};

export default Calculator;
