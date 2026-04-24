export default function IfandElse({isLoggedIn}){
  if(isLoggedIn){
    return <div>welcome back !</div>
  }

  else {return <div>please do SignIn</div>}
}

// short syntax for writing if/else 
    // return <h1>{isLOggedin ? "" : }  </h1>
// using AND operator 
// return <h1>{isLOggedIN && <p></p>}  </h1>