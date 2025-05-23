import { useState } from "react";

const Home = () =>{
    const 
    const countIncrement = () =>{
        return number = number + 1
    }
    const countDecrement = () =>{
        return number = number -1
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