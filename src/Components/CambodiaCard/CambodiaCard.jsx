import { useLoaderData } from "react-router-dom";
import CambodiaSingleCard from "./CambodiaSingleCard";
import { Helmet } from "react-helmet";


const CambodiaCard = () => {
    const CambodiaCards = useLoaderData();

    return (
        <div>
            <Helmet><title>Cambodia Tourists spots</title></Helmet>
            <h1 className="text-3xl text-center font-bold mt-8">Cambodia Tourists Spots</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {
                    CambodiaCards.map(item => <CambodiaSingleCard key={item._id } item={item}></CambodiaSingleCard> )
                }
            </div>
            
        </div>
    );
};

export default CambodiaCard;