import { useState } from "react";

export default function Update(){
    const [message , setMessage] = useState({
        text : 'hi how are you'
})

return (
    <>
    <h1>{message.text}</h1>
    <button onClick={()=> setMessage({text: 'welcome to shriffle'})}>
     click me 
    </button>
    </>
)
}