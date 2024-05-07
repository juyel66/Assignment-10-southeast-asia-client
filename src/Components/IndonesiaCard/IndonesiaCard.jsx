import { useLoaderData } from "react-router-dom";
import IndonesiaSingleCard from "./IndonesiaSingleCard";
import { Helmet } from "react-helmet";


const IndonesiaCard = () => {
    const IndonesiaCards = useLoaderData();

    return (
        <div>
            <Helmet><title>Indonesia Tourists spots</title></Helmet>
            <h1 className="text-3xl text-center font-bold mt-8">Indonesia Tourists Spots</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-3 gap-5">
                {
                    IndonesiaCards.map(item => <IndonesiaSingleCard key={item._id} item={item}></IndonesiaSingleCard> )

                }

            </div>
            
        </div>
    );
};

export default IndonesiaCard;