import React from 'react';
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import { googleMapAPIKey } from '../ThailandCard/Map';
// import { googleMapAPIKey } from "../Firebase/firebase.config";
// import GoogleMapReact from 'google-map-react';
// import { googleMapAPIKey } from "../Map/GoogleMap";

const AnyReactComponent = ({ text }) => <div className="text-red-600 font-bold">{text}</div>;

const ViewDetails = () => {
  const viewDetails = useLoaderData();
  const { _id } = useParams();
  const details = viewDetails.find((v) => v._id === _id);
  // console.log(details);
  const {
    seasonality,
    cost,
    image,
    time,
    visitors,
    CountryName,
    spotName,
    location,
    description,
  } = details;

  // const defaultProps = {
  //     center: {
  //         lat: 26.0274,
  //         lng: 88.4646
  //     },
  //     zoom: 20
  // };


  const defaultProps = {
    center: {
        lat: 26.0274,
        lng: 88.4646
    },
    zoom: 20
};

  return (
    <div>
      <Helmet>
        <title>View Details</title>
      </Helmet>
      <div>
        <section className=" ">
          <div className="container flex flex-col justify-center mx-auto py-6 lg:flex-row gap-2">
            <div className="flex border-2 rounded-xl border-gray-400 items-center justify-center p-6 mt-8 lg:mt-0 h-[400px] lg:w-[500px] shadow-xl bg-gray-200 xl:h-[600px] 2xl:h-[600px]">
              <img src={image} alt="" className="object-contain h-[400px]" />
            </div>

            <div className="flex flex-col border-2 rounded-xl border-gray-300 p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left h-[600px] lg:w-[500px] ml-0 lg:ml-4">
              <h1 className="text-5xl leading-none sm:text-6xl">
                {" "}
                <h1 className="text-4xl font-bold ">{spotName}</h1>
                <h1 className="text-xl mt-3 ">{description.slice(0, 145)}</h1>
              </h1>
              <hr />

              <h1 className="mt-5 mb-4">
                <span className="font-bold">Spot Name</span> {CountryName}
              </h1>
              <hr />

              <div className="mt-5">
                <br className="hidden  md:inline lg:hidden" />
                <div className="flex justify-between">
                  <div>
                    <span className="font-bold">Time:</span> {time}{" "}
                    <span>day</span>
                  </div>
                  <div>
                    <span className="font-bold">Cost:</span> {cost}
                  </div>
                </div>
              </div>
              <div className="text-xl mt-4 mb-4 font-bold"></div>
              <hr />
              <div className="text-xl space-y-3 pr-5 mt-8 mb-8">
                <div className="flex justify-between ">
                  <h1>Total Visitors</h1>
                  <h1 className="font-bold">{visitors}</h1>
                </div>
                <div className="flex justify-between ">
                  <h1>Spot Name</h1>
                  <h1 className="font-bold">{spotName}</h1>
                </div>
                <div className="flex justify-between ">
                  <h1>Seasonality:</h1>
                  <h1 className="font-bold">{seasonality}</h1>
                </div>
                <div className="flex justify-between ">
                  <h1>Location</h1>
                  <h1 className="font-bold">{location}</h1>
                </div>
              </div>
              <Link to="/" className="btn bg-gray-400 text-white text-xl">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div style={{ height: "350px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapAPIKey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
            //   text="My Company"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;


