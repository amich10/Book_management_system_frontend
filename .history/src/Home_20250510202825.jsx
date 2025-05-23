import { useState } from "react";

const Home = () =>{
    let number = 0
    const countIncrement = () =>{
        return number = number + 1
    }
    const Increment = () =>{
        return number = number + 1
    }
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