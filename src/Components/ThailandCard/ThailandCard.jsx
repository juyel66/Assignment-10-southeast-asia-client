import { useLoaderData } from "react-router-dom";
import ThailandSingleCard from "./ThailandSingleCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
AOS.init();

const ThailandCard = () => {
    const ThailandCard  = useLoaderData();
    
    return (
        <div>
            <Helmet><title>Thailand Tourists spots</title></Helmet>
            <h1 className="text-3xl text-center font-bold mt-8">Thailand Tourists Spots</h1>
            <div data-aos = 'fade-up' className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
                {
                    ThailandCard.map(item => <ThailandSingleCard key={item._id} item={item}></ThailandSingleCard>)
                }
            </div>
            
        </div>
    );
};

export default ThailandCard;