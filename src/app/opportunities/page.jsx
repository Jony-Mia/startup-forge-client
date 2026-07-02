import { GetRoute } from "@/api/actionRoutes";
import Tabler from "@/componet/Table";

const page = async () => {
    const data = await GetRoute();
    
    // if (!data || data.length === 0) {
    //     return (
    //         <div className="min-h-[70vh] flex flex-col justify-center items-center gap-4 px-4">
    //             <div className="p-6 bg-content2 rounded-full text-default-400">
    //                 <Check className="w-12 h-12" />
    //             </div>
    //             <h2 className="text-2xl font-semibold text-default-700">No Opportunities Found</h2>
    //             <p className="text-default-400 text-sm max-w-sm text-center">
    //                 There are currently no active opportunities available. Please check back later or create a new entry.
    //             </p>
    //         </div>
    //     );
    // }

    // const getWorkTypeColor = (type) => {
    //     switch (type?.toLowerCase()) {
    //         case "remote": return "success";
    //         case "hybrid": return "warning";
    //         case "onsite": return "primary";
    //         default: return "default";
    //     }
    // };

    return (
        <div className=" mx-auto flex flex-col justify-center items-center">

            <div className="flex text-center mt-4 flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl text-center font-bold tracking-tight text-default-900">Available Opportunities</h1>
                    <p className="text-default-500 text-center text-sm mt-1">Manage and monitor active roles, skills criteria, 
                        and application timelines.</p>
                </div>
            </div>
            
            <div className="w-full">
                <Tabler data={data} />
            </div>
            
        </div>
    );
};

export default page;