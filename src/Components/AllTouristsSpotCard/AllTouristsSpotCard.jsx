import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Fade } from "react-awesome-reveal";

const AllTouristsSpotCard = ({ item }) => {
  console.log(item);
  const {
    cost,
    seasonality,
    image,
    time,
    CountryName,
    spotName,
    location,
    _id
  } = item;
  return (
  <Fade>
      <div>
      <div data-aos = 'fade-down' className="card h-[400px] bg-gray-200 mt-10 card-compact border-4 border-green-500  shadow-xl">
        <figure>
          <img className="h-[200px] p-3 pt-5  w-full rounded-xl "
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
          <h2 className="card-title">{CountryName}</h2>
          <h2 className="card-title">{spotName}</h2>
          </div>
          {/* <p>{description.slice(0,100)}</p> */}
         
           <div className="">
           <p><span className="font-bold">Location:</span> {location}</p>
           
            <p><span className="font-bold">Seasonality: </span>{seasonality}</p>
            <p><span className="font-bold">Travel Time: </span>{time} day</p>
            <p className=" font-bold text-xl"><span className="font-extrabold">Average cost:</span> {cost}</p>
           </div>
          
            {/* <p><span className="font-bold">Cost: {cost}</span></p> */}
         
          <div className="card-actions">
            <Link  to={`/viewDetails/${_id}`} className="w-full"><button className="btn w-full bg-green-500 text-white text-xl ">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  </Fade>
  );
};

AllTouristsSpotCard.propTypes ={
  item: PropTypes.node.isRequired}


export default AllTouristsSpotCard;
