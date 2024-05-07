import { useLoaderData } from "react-router-dom";
import AllTouristsSpotCard from "../AllTouristsSpotCard/AllTouristsSpotCard";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { toast } from "react-toastify";

const AllTouristsSpot = () => {
    const allTouristsSpotData = useLoaderData();
    const [allData , setAllData ]= useState(allTouristsSpotData);

    const handleSortByCost = (e) => {
        console.log(e.target.value);
        if(e.target.value === "cost"){
            const sortedData = [...allData].sort((a, b) => a.cost - b.cost); // ascending order
            setAllData(sortedData);
            toast.success('Successfully sorted by average cost in ascending order');
        } else if (e.target.value === "all") {
            setAllData(allTouristsSpotData);
            toast.success('Showing all tourists spots');
        }
    };

    return (
        <div>
            <Helmet><title>All Tourists Spot</title></Helmet>
            <h1 className="text-3xl text-center font-bold">All Tourists Spot: {allData.length}</h1>
            <div className="">
                <select onChange={handleSortByCost} className="select select-bordered w-64 text-center join-item bg-[#23BE0A] text-white text-2xl">
                    <option value="all" selected className="text-xl">Select</option>
                    <option value="all" className="bg-white text-black text-sm text-start">All</option>
                    <option value="cost" className="bg-white text-black text-sm text-start">Average Cost</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {allData.map(item => <AllTouristsSpotCard key={item._id} item={item} />)}
            </div>
        </div>
    );
};

export default AllTouristsSpot;
