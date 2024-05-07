import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const AddTouristsSpot = () => {
  const handleAddTourists = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    // const email = form.email.value;
    const CountryName = form.CountryName.value;
    const spotName = form.spotName.value;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const visitors = form.visitors.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const image = form.image.value;
    const allData = {name,email,cost,seasonality,image,time,visitors,CountryName,spotName,location,description}
    console.log(allData)

            // send data to the server 
            fetch('https://southeast-asia-server-three.vercel.app/addTourist',{
            // fetch('https://southeast-asia-server-three.vercel.app/Countries',{
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(allData)
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Add Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

            
   };

   const {user} = useContext(AuthContext);




  return (
<Fade>
<div> <Helmet><title>Add Tourists Spot</title></Helmet>
<div className="bg-gray-200 rounded-xl mt-10 border-2">
      <h1 className="text-3xl font-extrabold text-center mt-5">
        Add Tourists Spot
      </h1>
      <form onSubmit={handleAddTourists} className="mt-5">
        {/* name row */}
        <div className="flex gap-5  mb-4">
          <div className="w-1/2 ml-10">
            <label className="input-group">
              <label className="label">
                <span>User Name</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                // placeholder="Enter your user Name"
                defaultValue={user.displayName}
                disabled
                name="name"
                type="text"
              />
            </label>
          </div>
          <div className="w-1/2 mr-10">
            <label className="input-group">
              <label className="label">
                <span> Enter your email</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                // placeholder="Enter your email"
                defaultValue={user.email}
                disabled
                name="email"
                type="email"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5  mb-4">
          <div className="w-1/2 ml-10">
            <label className="input-group">
              <label className="label">
                <span>Country Name</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                placeholder="Enter your country Name"
                name="CountryName"
                type="text"
              />
            </label>
          </div>
          <div className="w-1/2 mr-10">
            <label className="input-group">
              <label className="label">
                <span className="flex gap-1"> Tourists spot<span className="lg:flex hidden">name</span></span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                placeholder="Enter Tourists spot name"
                name="spotName"
                type="text"
              />
            </label>
          </div>
        </div>
        {/* supplier */}
        <div className="flex gap-5 mb-4">
          <div className="w-1/2 ml-10">
            <label className="input-group">
              <label className="label">
                <span>Location</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                placeholder=" Enter Your Location"
                name="location"
                type="text"
              />
            </label>
          </div>
          <div className="w-1/2 mr-10">
            <label className="input-group">
              <label className="label">
                <span>Short description</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                placeholder="Short description"
                name="description"
                type="text"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5 mb-4">
          <div className="w-1/2 ml-10">
            <label className="input-group">
              <label className="label">
                <span>Average cost</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                placeholder="Enter Average cost"
                name="cost"
                type="number"
              />
            </label>
          </div>
          <div className="w-1/2 mr-10">
            <label className="input-group">
              <label className="label">
                <span> Travel time</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                placeholder="Enter Travel time"
                name="time"
                type="number"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5 mb-4">
          <div className="w-1/2 ml-10">
            <label className="input-group">
              <label className="label">
                <span className="lg:flex">Total Visitors <span className="lg:flex hidden">Per Year</span> </span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                placeholder="Total Visitors"
                name="visitors"
                type="number"
              />
            </label>
          </div>
          <div className="w-1/2 mr-10">
            <label className="input-group">
              <label className="label">
                <span> Seasonality</span>
              </label>
              <input
                className="input w-full input-bordered join-item"
                placeholder="Enter Travel time"
                name="seasonality"
                type="text"
              />
              {/* <select className="input w-full input-bordered join-item" name="seasonality">
                <option value="volvo">Summer</option>
                <option value="saab">Rainy Season</option>
                <option value="mercedes">Autumn</option>
                <option value="audi">Late Autumn</option>
                <option value="audi">Winter</option>
                <option value="audi">Spring</option>
              </select> */}
              

            </label>
          </div>
        </div>

        <div className="ml-10 mr-10">
          <label className="input-group">
            <label className="label">
              <span>Image</span>
            </label>
            <input
              className="input  w-full input-bordered join-item"
              placeholder="Enter photo URL"
              name="image"
              type="url"
            />
          </label>
        </div>
        {/* <input type="submit" className="btn ml-10 lg:w-[96] mr-10 btn-block bg-gray-600 text-white mt-5" value="Add Coffee" /> */}
        <input
          type="submit"
          className="btn  bg-gray-500 text-xl text-white w-full   mt-5 mb-5"
        />
      </form>
    </div>
</div>
</Fade>
  );
};

export default AddTouristsSpot;
