const Button = ({ title }) => {
    return (
        <>
            <button className="bg-green-400 rounded-md h-10 w-20 p-2 text-white">
                {title}
            </button>
        </>
    );
};
export default Button;
