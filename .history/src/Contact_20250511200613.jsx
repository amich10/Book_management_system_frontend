import { useEffect } from "react"

const Contact = () =>{

    useEffect(() => {
        console.log("Hek")
    },[])
    return (
        <>
        <h1>Hello from Contact</h1>
        </>
    )
}

export default Contact