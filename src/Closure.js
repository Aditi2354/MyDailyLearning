export function Outer(){
    let value ="hi every one"

    function inner(){
        console.log(value)
        value = "updated"
    }
    return inner
}



