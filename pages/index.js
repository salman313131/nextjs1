import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first Meetup',
    image: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: 'maalad, 435677',
    description: 'This is first meetup'
  },
  {
    id: 'm2',
    title: 'A second Meetup',
    image: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: 'maalad, 435677',
    description: 'This is second meetup'
  },
  {
    id: 'm3',
    title: 'A third Meetup',
    image: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: 'maalad, 435677',
    description: 'This is third meetup'
  }
]
export default function Home(props) {
  return (
    <MeetupList meetups={props.meetups}/>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://jaan:jaankhan786@nodereact.mu2wjrq.mongodb.net/MeetUp?retryWrites=true&w=majority')
  const db = client.db()
  const meetupCollections = db.collection('meetup')
  const meetups = await meetupCollections.find().toArray();
  client.close()
  return {
    props:{
      meetups: meetups.map(meet=>({
        title:meet.title,
        address:meet.address,
        image:meet.image,
        id:meet._id.toString(),
      }))
    }
  }
}