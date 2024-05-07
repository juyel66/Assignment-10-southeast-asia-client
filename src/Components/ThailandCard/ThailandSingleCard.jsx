import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const ThailandSingleCard = ({item}) => {
    // console.log(item);
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
        <div>
               <div>
                    <div>
               <div>
      <div data-aos ='fade-down' className="card h-[400px] mt-5 card-compact border-2 border-gray-500  bg-base-100 shadow-xl">
        <figure>
          <img className="h-[200px] p-3  w-full rounded-xl "
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
            <p><span className="font-bold">Average cost:</span> {cost}</p>
            <p><span className="font-bold">Seasonality: </span>{seasonality}</p>
            <p><span className="font-bold">Travel Time: </span>{time} day</p>
           </div>
          
            {/* <p><span className="font-bold">Cost: {cost}</span></p> */}
         
          <div className="card-actions">
            <Link  to={`/ThailandViewDetails/${_id}`} className="w-full"><button className="btn w-full bg-gray-500 text-white text-xl ">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>

            
        </div>
            
        </div>
            
        </div>
    );
};
ThailandSingleCard.propTypes ={
    item:PropTypes.node.isRequired
}

export default ThailandSingleCard;