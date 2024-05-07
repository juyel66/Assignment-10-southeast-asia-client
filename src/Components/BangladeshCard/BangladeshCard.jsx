import { useLoaderData } from "react-router-dom";
import BnSingleCard from "./BnSingleCard";
import { Helmet } from "react-helmet";



const BangladeshCard = () => {
    const BNAllData = useLoaderData();
    console.log(BNAllData);

    return (
        <div> 
            <Helmet><title>Bangladesh Tourists spots</title></Helmet>
            <h1 className="text-3xl text-center font-bold mt-5">Bangladesh Tourists Spots</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    BNAllData.map(item => <BnSingleCard key={item._id} item={item}></BnSingleCard>)
                }
            </div>
            
        </div>
    );
};

export default BangladeshCard;