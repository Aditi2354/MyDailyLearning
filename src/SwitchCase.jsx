export default function StatusMessage({status}){
switch(status){
    case  'Loading':
    return <p>Loading</p>

    case 'Error':
    return <p>There is an Error</p>

    case 'success':
        return <p> data is successfully loaded</p>

        default :
        return <p>unknown status</p>
}
}