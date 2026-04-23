import  {useState} from 'react'

export default function Functional1 () {
const[message ,setMessage] = useState('Hello Miss')

const change = ()=>{
   return setMessage('Aditi ! how are you')
}
return(
    <>
    <h1>{message}</h1>
    <button onClick={change}>click me</button>
    </>
)
}