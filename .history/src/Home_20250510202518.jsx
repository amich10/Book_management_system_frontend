import { useState } from "react";

const Home = () =>{
    const [count,setCount] = useState()
    
    return (
        <>
        <button onClick={countIncrement}>+</button>
        <button butt>-</button>
        </>
    )
}
export default Home;