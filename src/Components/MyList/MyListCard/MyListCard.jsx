import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListCard = ({ item,idx, userData, setUserData }) => {
  console.log(item);
  const {
    cost,
    seasonality,
    image,
    time,
    visitors,
    CountryName,
    spotName,
    location,
    description,
    _id,
  } = item;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://southeast-asia-server-three.vercel.app/addTourist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Tourists has been deleted.",
                icon: "success",
              });

              const remaining = userData.filter(cof=> cof._id !== _id);
              setUserData(remaining);
              
            }
          });

        console.log('delete confirm')
      }
    });
  };
     

  return (
<div>
<div>
      {/* <div className="hero mt-5 border-2 border-green-500 rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="">
            <img
              src={image}
              className="w-[270px] h-[200px] rounded-lg shadow-2xl"
            />
          </div>
          <div className=" lg:w-[1000px]">
            <h1 className="text-3xl font-bold">{spotName}</h1>
            <p className="py-6">{description.slice(0, 200)}</p>
            <div className="lg:flex  gap-10">
              <p>
                <span className="font-bold">Location: </span> {location}
              </p>
              <p>
                <span className="font-bold">Cost: </span>
                {cost}
              </p>
              <p>
                <span className="font-bold">Time: </span>
                {time} day
              </p>
              <p>
                <span className="font-bold">Seasonality: </span>
                {seasonality}
              </p>
            </div>
            <div className="flex items-center gap-16">
              <p className="font-bold text-xl mt-3 mb-3">
                Country : {CountryName}
              </p>
              <p className="">
                <span className="font-bold">Total visitors per year:</span>{" "}
                {visitors}
              </p>
            </div>
            <div className="lg:flex gap-8 justify-center md:flex md:gap-10 space-x-1  ">
              <Link
                to={`/viewDetails/${_id}`}
                className="btn lg:w-[200px] w-40 bg-green-500 text-xl text-white"
              >
                View Details
              </Link>
              <Link to={`/updateTourist/${_id}`} className="btn lg:w-[200px] w-20 bg-yellow-500 text-xl text-white">
                Update
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn lg:w-[200px] w-20 bg-red-500 text-xl text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div> */}


<div className=" lg:w-[1350px]">
        <table className="table">
          <tbody>
        
          <tr  className="hover  text-center">
                <th>{idx + 1}</th>
                <td className="lg:w-80 lg:border-2 lg:border-gray-600">{CountryName}</td>
                <td className="lg:w-80 lg:border-2 lg:border-gray-600">{spotName}</td>
                <td className="lg:w-80 lg:border-2 lg:border-gray-600">{cost}</td>
                <td className="lg:flex text-xl lg:gap-16 flex  lg:w-40 lg:border-2 border-gray-600 ">
                  <Link to={`/updateTourist/${_id}`} >
                    
                    <button>
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                  <button onClick={() => handleDelete(_id)}>
                    <MdOutlineDelete className="text-2xl"></MdOutlineDelete>
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>



    </div>



</div>
  );
};

MyListCard.propTypes = {
  item: PropTypes.node.isRequired,
};

export default MyListCard;
