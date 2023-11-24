import MeetupDetail from "../../components/meetups/MeetupDetail"
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
    return {
        fallback: true,
        paths: [
            { 
                params :{
                    meetUpId : 'm1',
            }
        },
          { 
                params :{
                    meetUpId : 'm2',
            }
        },
          { 
                params :{
                    meetUpId : 'm3',
            }
        },
        ]
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetUpId;
    return {
        props:{
            meetupData:{
                image:'https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                title: 'the first meetup',
                address: 'mumbai, 400097',
                description: 'some meetup'
            }
        }
    }
}
