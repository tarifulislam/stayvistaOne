
// import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"
import Cetegories from "../../components/Cetegories/Cetegories"
import Rooms from "../../components/Rooms/Rooms"


const Home = () => {
  // const [params, setParams] = useSearchParams();
  // const dataCategory = params.get('category');
  // console.log(dataCategory);

  return (
    <div>
      <Helmet>StayVista | Vacation Homes</Helmet>
      <Cetegories></Cetegories>
      <Rooms></Rooms>
    </div>
  )
}

export default Home
