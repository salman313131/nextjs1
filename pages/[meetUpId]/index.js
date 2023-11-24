import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient, ObjectId } from "mongodb"
const MeetupDetails = (props) =>{
    return(
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />)
}
export default MeetupDetails

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/MeetUp?retryWrites=true&w=majority')
    const db = client.db()
    const meetupCollections = db.collection('meetup')
    const meetups = await meetupCollections.find({},{_id:1}).toArray();
    client.close()
    return {
        fallback: true,
        paths: meetups.map((meet)=>({params:{meetUpId:meet._id.toString()}}))
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetUpId;
    const client = await MongoClient.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/MeetUp?retryWrites=true&w=majority')
    const db = client.db()
    const meetupCollections = db.collection('meetup')
    const meetup = await meetupCollections.findOne({_id:new ObjectId(meetupId)});
    const stringMeetup = {...meetup,_id:meetup._id.toString()}
    client.close()
    return {
        props:{
            meetupData:stringMeetup,
        },
    }
}
