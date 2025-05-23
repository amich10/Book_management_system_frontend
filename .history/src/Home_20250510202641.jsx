import { useState } from "react";

const Home = () =>{
    const [count,setCount] = useState()
    let number = 0
    return (
        <>
        <div>
             <button onClick={countIncrement}>+</button>
        </div>
       <div>

       </div>
        </>
    )
}
export default Home;