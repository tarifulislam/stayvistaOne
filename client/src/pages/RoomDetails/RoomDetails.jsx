import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

// https://raw.githubusercontent.com/shakilahmedatik/stayVista-starter-template/main/client/public/rooms.json


const RoomDetails = () => {
    const {id} = useParams()
    const [rooms, setRooms] = useState({})
    const [loading, setLoading] = useState(false)
  
      useEffect(()=>{
          setLoading(true)
          fetch("/rooms.json")
          .then(res => res.json())
          .then(data => {
            const singleRoom = data.find(rooms => rooms._id === id)
            setRooms(singleRoom)
            setLoading(false)
          })
      },[id]) 
  
      // console.log(rooms);
      if(loading){
           return <Loader></Loader>
     }

    return (
        <div>
           <Container>
            <Helmet>
                <title>
                    {rooms?.title}
                </title>
            </Helmet>
            {rooms?.title}
           </Container>
        </div>
    );
};

export default RoomDetails;