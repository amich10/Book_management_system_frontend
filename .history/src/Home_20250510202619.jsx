import { useState } from "react";

const Home = () =>{
    const [count,setCount] = useState()
    let number = 0
    return (
        <>
        <button onClick={countIncrement}>+</button>
        <button onClick={countDecrement}>-</button>
        </>
    )
}
export default Home;