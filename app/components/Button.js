'use client';

const Button = ({ label, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-gray-900 text-white font-bold py-2 px-4 rounded ${className} hover:bg-gray-700 transition-colors duration-200`}
        >
            {label}
        </button>
    );
};

export default Button;
