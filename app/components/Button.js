const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick}
            className="bg-white/70 rounded-md font-bold py-4 hover:bg-gray-400" >
            {label}
        </button>
    );
};

export default Button;
