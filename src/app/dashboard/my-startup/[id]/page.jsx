import { SingleStartup } from '@/api/actionRoutes';
import UpdateForm from './UpdateForm';

const page = async ({params}) => {
    let {id} = await params;
    let singleData = await SingleStartup(id);

    console.log(singleData);
    
    return (
        <div>
            <UpdateForm singleData={singleData} />
        </div>
    );
};

export default page;