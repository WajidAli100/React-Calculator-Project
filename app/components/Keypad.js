import Button from './Button';

const Keypad = ({ setCurrentInput, currentInput, handleCalculation, setResult }) => {
    const handleClick = (value) => {
        setCurrentInput(currentInput + value);  // Append value to input
    };

    const handleBackspace = () => {
        setCurrentInput(currentInput.slice(0, -1));  // Remove last character
    };

    const handleClear = () => {
        setCurrentInput('');  // Clear input
        setResult(0);  // Reset result to zero
    };

    return (
        <div className="grid grid-cols-4 gap-2 font-bold text-xl">
            <Button label="1" onClick={() => handleClick('1')} />
            <Button label="2" onClick={() => handleClick('2')} />
            <Button label="3" onClick={() => handleClick('3')} />
            <Button label="+" onClick={() => handleClick('+')} />

            <Button label="4" onClick={() => handleClick('4')} />
            <Button label="5" onClick={() => handleClick('5')} />
            <Button label="6" onClick={() => handleClick('6')} />
            <Button label="-" onClick={() => handleClick('-')} />

            <Button label="7" onClick={() => handleClick('7')} />
            <Button label="8" onClick={() => handleClick('8')} />
            <Button label="9" onClick={() => handleClick('9')} />
            <Button label="*" onClick={() => handleClick('*')} />

            <Button label="0" onClick={() => handleClick('0')} />
            <Button label="AC" onClick={handleClear} />  {/* Clear Button */}
            <Button label="⌫" onClick={handleBackspace} />  {/* Backspace Button */}
            <Button label="/" onClick={() => handleClick('/')} />

            <Button label="=" onClick={handleCalculation} className="col-span-4" />  {/* Equals Button */}
        </div>
    );
};

export default Keypad;

