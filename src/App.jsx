

import './App.css'
import Functional1 from './Functional1'
import Greeting from './Greeting'
import Map from './Listmap'
import { useEffect } from 'react'
import { Outer } from './Closure'
import Profile from './Profile'
function App() {
  
const name ='Aditi'

// const Welcome = (props)=>{
//  return <div>{props.children}</div>
// }
useEffect(()=>{
const closure =Outer()
closure()
closure()
},[])
  return (
    <>
     <div>
      hello miss {name}
      <br></br>
      {/* <Welcome>
        <h1>i am don</h1>
        <h2>i am god</h2>
      </Welcome> */}
      <br></br>
      <Functional1/>
      <br></br>
      <Greeting message="Namaste India"/>
      <br></br>
      <Map/>
      <br></br>
      <Profile name="Aditi" age = "24"/>
     </div>
    </>
  )
}

export default App
