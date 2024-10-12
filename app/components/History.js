'use client'; // Ensure this is the first line

import React from 'react';

const History = ({ history }) => {
    return (
        <div className='mt-4 bg-gray-800 text-white mx-auto p-6 text-center'>
            <h2>History</h2>
            {/* Display history */}
            {history.length > 0 ? (
                <ul>
                    {history.map((entry, index) => (
                        <li key={index}>
                            {entry.expression} = {entry.result} ({entry.timeStamp})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No history yet</p>
            )}
        </div>
    );
};

export default History;
