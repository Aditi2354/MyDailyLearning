import { useState } from "react";


 function Childcomp({change}){
  return <div>passing the {change}</div>
}

export default function Eventhandled(){
    const[inp,setInp] =useState("")
    const [name,setName] = useState("")

    const click =()=>{
        setName(inp)
        setInp("")
    }

    return(
        <>
        <div>
            {name ? <h2>your name is : {name}</h2> : null}

            <input
            type="text"
            placeholder="write your name"
            onChange={(e)=> setInp(e.target.value)}
            value={inp}
            />
            <button onClick={click}>save</button>
            <Childcomp change={click}/>
        </div>
        </>
    )
}