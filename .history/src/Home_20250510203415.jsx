import { useState } from "react";

const Home = () =>{
    const [count,setCount] = useState(0)

    const countIncrement = () =>{
         setCount((count) => count++);
    }
    const countDecrement = () =>{
         setCount((count) => count--);
    }
    return (
        <>
            <h1>{count}</h1>
             <button onClick={countIncrement}>+</button>
             <button onClick={countDecrement}>-</button>
        </>
    )
}
export default Home;