
const Button =  ({title}{
    console.log(props.title)
    return (
        <>
        <button className="bg-green-400 rounded-md h-10 w-20 p-2 text-white">
            {props.title}
        </button>
        </>
    )
}
export default Button;