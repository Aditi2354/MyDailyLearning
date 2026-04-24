
import Child from "./Child"
export default function  Parent(){
// call back function this function will triggered in child component
    const handleClick=()=>{
        console.log('event triggered')
    }

    return(
        <>
        <h1>Parent Component</h1>
        {/* // sending the call back function using props to child component */}
        <Child  handlemyClick ={handleClick}/>
        </>
    )
}