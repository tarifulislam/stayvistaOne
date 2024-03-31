import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { useSearchParams } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false)
  const dataCategory = params.get('category');

    useEffect(()=>{
        setLoading(true)
        fetch("rooms.json")
        .then(res => res.json())
        .then(data => {
            if(dataCategory){
                const filteredData = data.filter(data => rooms.category === dataCategory)
                setRooms(filteredData)
            }else{
                setRooms(data)
            }
            setLoading(false)
        })
    },[dataCategory]) 

    // console.log(rooms);
    if(loading){
         return <Loader></Loader>
    }

    return (
       <Container>
            {
               rooms && rooms.length > 0 ? <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-6 gap-8 py-9">
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div> 
            : 
            
            <div className=" flex justify-center items-center min-h-[calc((100vh-300px))]">
                <Heading center={true} title="no room available in category" subtitle="please select other catagory"></Heading>
            </div>
            }

       </Container>
    
    );
};

export default Rooms;