'use client';

const Display = ({ currentInput, result }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg mb-4 text-right text-3xl">
            {/* Show current input or zero if there's no input */}
            <div className="text-white">{currentInput || '0'}</div>
            {/* Show the result, if available */}
            <div className="text-green-400">{result !== null ? `= ${result}` : ''}</div>
        </div>
    );
};

export default Display;
