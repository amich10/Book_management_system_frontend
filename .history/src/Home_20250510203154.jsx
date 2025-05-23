import { useState } from "react";

const Home = () =>{
    const [count,setCount] = useState()

    const countIncrement = () =>{
         count = count + 1
    }
    const countDecrement = () =>{
         count = count -1
    }
    return (
        <>
        <div>
            <h1>{count}</h1>
             <button onClick={countIncrement}>+</button>
        </div>
       <div>
            <h1>{number}</h1>
             <button onClick={countDecrement}>-</button>
       </div>
        </>
    )
}
export default Home;