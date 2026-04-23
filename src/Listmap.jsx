export default function Map(){
    const fruits =['apple','banana','mango']
     const fruitsItems=[]

   fruits.forEach((items,index)=> 
     fruitsItems.push(<li key={index}>{items}</li>) )
    return(
        <>
         <div>
            <h2>Fruits Name</h2>
            <ul>{fruitsItems}</ul>
         </div>
        </>
    )
}