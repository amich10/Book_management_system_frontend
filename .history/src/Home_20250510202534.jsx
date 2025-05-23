import { useState } from "react";

const Home = () =>{
    const [count,setCount] = useState()
    let 
    return (
        <>
        <button onClick={countIncrement}>+</button>
        <button onClick={countDecrement}>-</button>
        </>
    )
}
export default Home;