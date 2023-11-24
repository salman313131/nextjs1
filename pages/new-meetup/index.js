import NewMeetUpForm from "../../components/meetups/NewMeetupForm"
const NewMeetUp = ()=>{
    const addMeetupHandler=(enteredData)=>{
        console.log(enteredData)
    }
    return <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
}
export default NewMeetUp