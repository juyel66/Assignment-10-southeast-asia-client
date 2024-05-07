import { useLoaderData } from "react-router-dom";
import MalaysiaSingleCard from "./MalaysiaSingleCard";
import { Helmet } from "react-helmet";


const MalaysiaCards = () => {
    const malaysiaCard = useLoaderData();

    return (
        <div>
            <Helmet><title>Malaysia Tourists spots</title></Helmet>
            <h1 className="text-3xl text-center font-bold mt-8 ">Malaysia Tourists Spots</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5"> 
                {
                    malaysiaCard.map(item => <MalaysiaSingleCard key={item._id} item={item}></MalaysiaSingleCard>)
                }
            </div>
            
        </div>
    );
};

export default MalaysiaCards;