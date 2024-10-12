'use client'; // Ensure this is the first line

import { useState } from "react";  // Correctly import useState from React
import Calculator from "./components/Calculator";
import History from "./components/History";

export default function Home() {
  const [currentInput, setCurrentInput] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const addToHistory = (expression, result) => {
    const newEntry = {
      expression,
      result,
      timeStamp: new Date().toLocaleString(),
    };
    setHistory([newEntry, ...history]);
  };

  return (
    <div>
      <Calculator
        currentInput={currentInput}
        setCurrentInput={setCurrentInput}
        result={result}
        setResult={setResult}
        addToHistory={addToHistory}
      />
      <History history={history} />
    </div>
  );
}
