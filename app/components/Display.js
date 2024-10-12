
const Display = ({ currentInput, result }) => {
    return (
        <div className="bg-slate-200 p-4 rounded-lg mb-4 text-right font-bold text-3xl">
            <div>{currentInput || '0'}</div>
            <div>{result !== null ? `= ${result}` : ''}</div>
        </div>
    );
};

export default Display;
