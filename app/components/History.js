'use client';

const History = ({ history }) => {
    return (
        <div className="bg-gray-700 p-4 rounded-lg mt-4">
            <h3 className="text-white text-xl mb-2">History</h3>
            {/* Check if there's history */}
            {history.length > 0 ? (
                <ul className="text-white space-y-1">
                    {history.map((entry, index) => (
                        <li key={index}>
                            <span>{entry.expression}</span> <span>= {entry.result}</span>
                            <span className="text-gray-400"> ({entry.timestamp})</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-400">No history yet.</p>
            )}
        </div>
    );
};

export default History;
