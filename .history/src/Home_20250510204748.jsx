import { useState } from "react";

const Home = () =>{
    const [count,setCount] = useState(0)

    console.log(useState(100))

    const countIncrement = () =>{
         setCount((count) => count + 1);
    }
    const countDecrement = () =>{
         setCount((count) => count - 1);
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