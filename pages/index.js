import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Head } from "next/document";
export default function Home(props) {
  return (
    <>
    <Head>
      <title>React meetups</title>
    </Head>
    <MeetupList meetups={props.meetups}/>
    </>
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