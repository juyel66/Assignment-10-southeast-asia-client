import { useLoaderData } from "react-router-dom";
import VietnamSingleCard from "./VietnamSingleCard";
import { Helmet } from "react-helmet";


const VietnamCard = () => {
    const VietnamCards = useLoaderData();
    
    return (
        <div>
            <Helmet><title>Vietnam Tourists spots</title></Helmet>
            <h1 className="text-3xl text-center font-bold mt-8">Vietnam Tourists Sports</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {
                    VietnamCards.map(item => <VietnamSingleCard key={item._id} item={item}></VietnamSingleCard> )
                }
            </div>
            
        </div>
    );
};

export default VietnamCard;