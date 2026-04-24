export default function ProductItems({Items}){
 if(!Items || Items.length == 0){
    return <p>No Products Found</p>
 }

 return(
    <ul>
     {Items.map ((item,index)=> <li key={index}>{item}</li>)}
    </ul>
 )
}