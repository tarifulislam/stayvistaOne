
import { useSearchParams } from 'react-router-dom'; // for get query from link.
import Container from '../Shared/Container';
import { categoriesData } from './CetegoriesData.js';  // for get dami data from CetegoriesData.js.
import CetegoryBox from './CetegoryBox';

const Cetegories = () => {
    const [params, setParams] = useSearchParams(); // for get query from link.
    const category = params.get('category'); // for get query from  useSearchParams params.
    console.log(category);


    return (
        <Container>
            <div className=' pt-4 flex  items-center justify-between overflow-x-auto'>
                {
                    categoriesData.map(item => <CetegoryBox  key={item.label} label={item.label} icon={item.icon} selected={category === item.label}></CetegoryBox>)
                }
            </div>
        </Container>
    );
};

export default Cetegories;