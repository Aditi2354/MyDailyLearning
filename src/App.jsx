

import './App.css'
import Functional1 from './Functional1'
import Greeting from './Greeting'
import Map from './Listmap'
import { useEffect } from 'react'
import { Outer } from './Closure'
import Profile from './Profile'
import Playing from './Props'
import BOX from './Children'
import IfandElse from './IfandElse'
import StatusMessage from './SwitchCase'
import ProductItems from './Items'
import Authentication from './Authentication'
import Update from './SetState'
import Eventhandled from './Event'
import Parent from './Parent'
import User from './Conditional'
function App() {
     let ProductList= ['shoes','perfume','jeans','top'] 
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
      <Profile name='Aditi' age={24} />
     </div>
     <>
     <div>

    <Playing game="badminton"/>
     </div>
     <br></br>
     <div>
      <BOX>
        <p>This is what i am DON</p>
      </BOX>
     </div>
     </>
     <div>
      <IfandElse isLoggedIn={false}/>
     </div>

     <div>
      <StatusMessage status='Loading'/>
     </div>
      <div>
       <ProductItems Items={ProductList}/>
      </div>

      <div>
        <Authentication/>
      </div>

      <div>
        <Update/>
      </div>
      <div>
        <Eventhandled/>
      </div>
      <div>
        <Parent/>
      </div>
      <div>
        <User isLoggedIn={false} isAdmin={false} isBanned={true}/>
      </div>
    </>
    
  )
}

export default App
