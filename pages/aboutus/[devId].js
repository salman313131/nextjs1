import { useRouter } from "next/router"
const details = [

{ id : 1, name: 'Yash', role: 'Senior Developer'},
{ id : 2, name: 'Vaibhav', role: 'Backend Developer'},
{ id : 3, name: 'Suresh', role: 'Frontend Developer'}
]
const Developers=()=>{
    const router = useRouter();
    const devId = router.query.devId;
    return(
        <>
            {details[devId-1] && <h1>{details[devId-1].name} - {details[devId-1].role}</h1>}
            {!details[devId-1] && <h1>Developer doesn't exists</h1>}
        </>
    )
}
export default Developers