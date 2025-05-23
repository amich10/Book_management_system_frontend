import { useState } from "react";

const Home = () =>{
    let number = 0
    const incr
    return (
        <>
        <div>
            <h1>{number}</h1>
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