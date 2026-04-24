export default function User({isLoggedIn,isAdmin,isBanned}){
  const message = 
   !isLoggedIn ? 'please logged in '
  : isBanned 
  ? 'user is banned '
  :isAdmin 
  ?'user is  Admin': 'you have successfully loggedin and i am don'


return (
    <>
    <h1>{message}</h1>
    </>
)

}