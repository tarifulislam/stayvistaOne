import { useNavigate, useSearchParams } from "react-router-dom"; // for get query from link. 
import qs from "query-string" // for get query from link. it is a react packege.

const CetegoryBox = ({label , icon: Icon, selected}) => {

    const [params, setParams] = useSearchParams();  // for get query from link.
    const navigate = useNavigate() // for navigate location.

    const handleClick = () => {
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString()) // for convert query into object.
           }

            const updateQuery = {...currentQuery, category: label }; // for get query abd set data.
            
            const url = qs.stringifyUrl({ // convert query boject to string.
                url: '/',
                query: updateQuery,
            })
            navigate(url)
      
        console.log(label);
    }

    params.get("category")

    return (
        <div onClick={ handleClick} className={`p-4 flex flex-col  justify-center items-center gap-2  border-b-2 hover:text-green-500 transition cursor-pointer ${selected ? ' border-b-neutral-800 text-neutral-800': ' border-transparent text-neutral-500' }`}>
            <Icon size={28}/>
            <div className=" text-xl font-semibold">{label}</div>
        </div>  
    );
};

export default CetegoryBox;