const Button = ({ title,onClick }) => {
    return (
        <>
            <button className="bg-green-500 rounded-md h-10 w-20 p-2 text-white font-bold hover:bg-green-600 cursor-pointer" 
                onClick={onClick ? onClick : undefined}
            >
                {title}
            </button>
        </>
    );
};
export default Button;
