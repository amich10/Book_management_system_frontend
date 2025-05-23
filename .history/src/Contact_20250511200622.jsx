import { useEffect } from "react"

const Contact = () =>{

    useEffect(() => {
        console.log("Hello World")
    },[])
    return (
        <>
        <h1>Hello from Contact</h1>
        </>
    )
}

export default Contact