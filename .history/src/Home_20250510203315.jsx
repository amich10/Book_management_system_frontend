import { useState } from "react";

const Home = () =>{
    const [count,setCount] = useState(0)

    const countIncrement = () =>{
         setCount(count + 1);
    }
    const countDecrement = () =>{
         setCount(count - 1);
    }
    return (
        <>
            <h1>{count}</h1>
             <button onClick={countIncrement}>+</button>
        </div>
       <div>
             <button onClick={countDecrement}>-</button>
       </div>
        </>
    )
}
export default Home;