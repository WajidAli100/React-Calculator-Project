
import Button from './Button';

const Keypad = ({ setCurrentInput, currentInput, handleCalculation, setResult }) => {
    // Handle Button Click for Number and Operators
    const handleClick = (value) => {
        setCurrentInput(currentInput + value);
    };

    // Handle Backspace (removing the last character)
    const handleBackspace = () => {
        setCurrentInput(currentInput.slice(0, -1));
    };

    // Handle Clear (reset input and result)
    const handleClear = () => {
        setCurrentInput('');
        setResult(0);
    };

    return (
        <div className="grid grid-cols-4 font-bold text-2xl gap-2">
            <Button label="%" onClick={() => handleClick('%')} />
            <Button label="C" onClick={handleClear} />  {/* Clear Button */}
            <Button label="⌫" onClick={handleBackspace} />  {/* Backspace Button */}
            <Button label="/" onClick={() => handleClick('/')} />

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


            <Button label="CE" onClick={handleClear} />
            <Button label="0" onClick={() => handleClick('0')} />
            <Button label="." onClick={() => handleClick('.')} />
            <Button label="=" onClick={handleCalculation} className="col-span-4" />  {/* Calculation Button */}
        </div>
    );
};

export default Keypad;
