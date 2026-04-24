import { useState } from "react";

export default function Authentication(){
  const [isAuthentication, setAuthenticated]  = useState(false)
  return(
    <div>
     {isAuthentication ?(<h2>user profile</h2>):
     (<button onClick={()=>setAuthenticated(true)}>Login</button>)
     }
    </div>
  )

}