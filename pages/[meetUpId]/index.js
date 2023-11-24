import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient,ObjectId } from "mongodb"
const MeetupDetails = (props) =>{
    return(
        <MeetupDetail
            image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="The first meetup"
            address="mumbai, 400097"
            description="some meetup"
        />)
}
export default MeetupDetails

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/MeetUp?retryWrites=true&w=majority')
    const db = client.db()
    const meetupCollections = db.collection('meetup')
    const meetups = await meetupCollections.find().toArray();
    client.close()
    let path = []
    meetups.forEach((meet)=>path.push({params:{meetUpId:meet._id.toString()}}))
    return {
        fallback: true,
        paths: path
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetUpId;
    const objId = new ObjectId(meetupId)
    const client = await MongoClient.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/MeetUp?retryWrites=true&w=majority')
    const db = client.db()
    const meetupCollections = db.collection('meetup')
    const meetup = await meetupCollections.findOne({_id:objId});
    client.close()
    return {
        props:{
            meetupData:{
                image: meetup.image,
                title: meetup.title,
                address: meetup.address,
                description: meetup.description
            }
        }
    }
}
