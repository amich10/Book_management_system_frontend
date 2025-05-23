import { useState } from "react";

const Home = () =>{
    const [count,setCount] = useState()
    
    return (
        <>
        <button onClick={countIncrement}>+</button>
        <button onClick={countDecrement}>-</button>
        </>
    )
}
export default Home;