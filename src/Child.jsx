export default function Child({handlemyClick}){
  return(
    <>
    <p>Child Component</p>

    <button onClick={handlemyClick}>Click this Side</button>
    </>
  )
}