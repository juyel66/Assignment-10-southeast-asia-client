import { Helmet } from "react-helmet";
import SwiperSlider from "./SwiperSlider/SwiperSlider";
import { Fade } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import TouristsSpotsCard from "../TouristsSpotsCard/TouristsSpotsCard";
import GoogleMapReact from 'google-map-react';
// import { googleMapAPIKey } from "../Firebase/firebase.config";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { googleMapAPIKey } from "../ThailandCard/Map";
AOS.init();



const AnyReactComponent = ({ text }) => <div className="text-red-600 font-bold">{text}</div>;

const defaultProps = {
  center: {
      lat: 25.8600,
      lng: 88.3585
  },
  zoom: 15
};
const Home = () => {
  const Tourists = useLoaderData();
  console.log(Tourists)
  return (
    <div>
      <Helmet><title>Home</title></Helmet>
      
      <Fade>
      {/* <p>I am an animated text</p> */}
    
      <SwiperSlider></SwiperSlider>

      {/* Tourists Spots */}
      <h1 className="text-3xl text-center font-bold mt-10">Tourists Spots</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">

        {
          Tourists.map(item => <TouristsSpotsCard key={item._id} item={item}></TouristsSpotsCard>)
        }


      </div>

      <h1 className="text-3xl text-center mt-10 font-bold">Countries</h1>

      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 mt-5"> */}
        {/* 1st  */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-3">
        <Link data-aos="fade-down" to='BangladeshCard' className="card lg:h-[100px]  bg-base-100 shadow-xl image-full">
          <figure>
            <img className="w-[400px]"
              src="https://i.ibb.co/GxYC28P/download-32.jpg"
              alt="Shoes"
            />
          </figure>
          <div  className="card-body">
            <h2 className="card-title text-3xl">Bangladesh</h2>
            <p className="text-[14px]">Embark on a journey through Bangladesh vibrant culture and stunning natural landscapes</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </Link>

                {/* 1st  */}
                <Link data-aos="fade-up" to='ThailandCard' className="card lg:h-[100px]  bg-base-100 shadow-xl image-full">
          <figure>
            <img className="w-[400px]"
              src="https://i.ibb.co/ZgZPRYq/download-35.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Thailand</h2>
            <p className="text-[14px]">Thailand tourist treasures: from vibrant street markets and ornate temples to pristine</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </Link>

                {/* 1st  */}
                <Link data-aos="fade-down" to='/IndonesiaCard' className="card lg:h-[100px]   bg-base-100 shadow-xl image-full">
          <figure>
            <img className="w-[400px]"
              src="https://i.ibb.co/x57QtbN/download-36.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Indonesia</h2>
            <p className="text-[14px]">Discover Indonesia enchanting beauty: lush jungles, volcanic landscapes, and cultures...</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </Link>

        </div>


<div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 mt-5 lg:mt-20">
                  {/* 1st  */}
                  <Link data-aos="fade-up" to='/malaysiaCard' className="card lg:h-[100px]  bg-base-100 shadow-xl image-full">
          <figure>
            <img className="w-[400px]"
              src="https://i.ibb.co/THRqMvG/download-37.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Malaysia</h2>
            <p className="text-[14px]">Experience Malaysia cultural fusion: bustling cities, lush rainforests, and stunning...</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </Link>

                {/* 1st  */}
                <Link data-aos="fade-down" to='/VietnamCard' className="card lg:h-[100px]  bg-base-100 shadow-xl image-full">
          <figure>
            <img className="w-[400px]"
              src="https://i.ibb.co/t4k7n4Q/licensed-image-10.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Vietnam</h2>
            <p className="text-[14px]">Vietnams charm awaits: explore bustling cities, serene countryside, and breathtaking...</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </Link>

                {/* 1st  */}
                <Link data-aos="fade-up" to='/CambodiaCard' className="card h-[100px] bg-base-100 shadow-xl image-full">
          <figure>
            <img className="w-[400px]"
              src="https://i.ibb.co/2Pcs9Mf/images-34.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Cambodia</h2>
            <p className="text-[14px]">Cambodia allure beckons: ancient temples, vibrant markets, and rich history...</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </Link>
</div>

      {/* </div> */}
      </Fade>

      <div>
      <div>
                <h1 className="text-center mt-20 text-4xl font-bold text-green-600">Meet Our Team</h1>
                <p className="text-center text-green-500 font-bold">If you want to go for a tour with our team then you can contact us </p>

            </div>


            <div className=" lg:flex justify-between mt-10">
                <div className="item-center flex justify-center">

                    <div>

                        <p className="text-3xl mb-5 font-bold">MD JUYEL RANA is one of these team members <Link to="/" className="text-blue-500 underline"> Asia Wonders </Link> company</p>
                        <div className="join join-vertical w-full">
                            <div  className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                Discovering the Charms of Bangladesh: Top Tourist Destinations
                                </div>
                                <div className="collapse-content">
                                    <p>Sundarbans National Park: Explore the world largest mangrove forest, home to the Royal Bengal Tiger...</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                Thailand Unveiled: Exotic Adventures and Cultural Wonders


                                </div>
                                <div className="collapse-content">
                                    <p> Bangkok: Immerse yourself in the vibrant heart of Thailand, where ancient temples blend with modern skyscrapers, bustling markets.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                Modern Apartment with Stunning Views and Amenities
                                </div>
                                <div className="collapse-content">
                                    <p>Stylish 2-bed apartment with panoramic city views, modern amenities, and vibrant neighborhood ambiance. Perfect blend of comfort and convenience.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                Malaysia Marvels: Diverse Delights Await
                                </div>
                                <div className="collapse-content">
                                    <p>Kuala Lumpur: Dive into the vibrant capital city, where towering skyscrapers blend with historic mosques and bustling markets</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                Cambodia: Ancient Wonders and Cultural Treasures
                                </div>
                                <div className="collapse-content">
                                    <p>Angkor Wat: Marvel at the majestic temples of Angkor, including the iconic Angkor Wat, Ta Prohm entwined roots</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                Exploring Indonesia: Islands of Diversity and Natural Splendor
                                </div>
                                <div className="collapse-content">
                                    <p>Embark on a journey to the Island of the Gods where lush rice terraces, ancient temples, and vibrant cultural traditions .</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                Vietnam: A Tapestry of History, Culture, and Natural Beauty
                                </div>
                                <div className="collapse-content">
                                    <p>Hanoi: Begin your Vietnamese adventure in the capital city of Hanoi, where ancient pagodas, colonial architecture,</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                Bangladesh: Beyond Boundaries
                                </div>
                                <div className="collapse-content">
                                    <p>Embark on a soul-stirring journey through the heart of Bangladesh, a land of unparalleled beauty and cultural richness.</p>
                                </div>
                            </div>
                            {/* <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                Cityscape Retreat Apartments
                                </div>
                                <div className="collapse-content">
                                    <p>Indulge in city living at its finest with panoramic skyline views, contemporary design, and luxury amenities for the ultimate urban escape.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                Metropolitan Heights Apartments
                                </div>
                                <div className="collapse-content">
                                    <p>Experience urban sophistication at Metropolitan Heights, offering sleek design, upscale amenities, and unparalleled city views for the discerning resident</p>
                                </div>
                            </div> */}
                        </div>
                    </div>



                </div>
                <div>
                    <div data-aos="fade-down" className="card card-compact border-2 border-gray-400 bg-base-100 shadow-xl">
                        <figure><img className="lg:h-[435px] lg:w-[420px] obj rounded-full" src="https://i.ibb.co/7VSBYtS/imresizer-1713070675831.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">MD JUYEL RANA</h2>
                            <p className="font-bold text-[16px] break-all">Email: <span className="font-bold text-[15px]">mdjuyelrana.com.bd1@gmail.com</span></p>
                            <p>Founder at JR Residential</p>
                            <div className="card-actions justify-center">
                               <Link  to="https://www.facebook.com/juyel99730" className="w-full"> <button className="btn bg-green-500 w-full text-white text-xl">Contact Us</button></Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-9" >

<div data-aos="fade-up" className="card card-compact border-2 border-green-500  bg-base-100 shadow-xl">
    <figure><img className="lg:h-[200px] pt-1 lg:w-[220px] rounded-full" src="https://i.ibb.co/Rjx9cyF/images-9.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title font-bold">John.smith</h2>
        <p className="font-bold ">Email: jhon1222@gmail.com</p>
        <div className="card-actions justify-center">
            <button className="btn bg-green-500 w-full text-white text-xl ">view Details</button>
        </div>
    </div>
</div>


<div data-aos="fade-down" className="card card-compact border-2 border-green-500  bg-base-100 shadow-xl">
    <figure><img className="lg:h-[200px] pt-1 lg:w-[220px] rounded-full" src="https://i.ibb.co/NZV6C5W/download-1.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title font-bold">Jsmith</h2>
        <p className="font-bold">Email: jsmithjhon122@gmail.com</p>
        <div className="card-actions justify-end">
            <button className="btn btn bg-green-500 w-full text-white text-xl  ">View Details</button>
        </div>
    </div>
</div>

<div data-aos="fade-up" className="card card-compact border-2 border-green-500  bg-base-100 shadow-xl">
    <figure><img className="lg:h-[200px] pt-1 lg:w-[220px] rounded-full" src="https://i.ibb.co/HYx8MXV/download-2.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title font-bold">Smith.john!</h2>
        <p className="font-bold">Email: smithjhon122@gmail.com</p>
        <div className="card-actions justify-end">
            <button className="btn btn bg-green-500 w-full text-white text-xl ">View Details</button>
        </div>
    </div>
</div>

<div data-aos="fade-down" className="card border-2 border-green-500 card-compact  bg-base-100 shadow-xl">
    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/5kR0BHf/download-3.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title font-bold">Johns</h2>
        <p className="font-bold">Email: jhon122@gmail.com</p>
        <div className="card-actions justify-end">
            <button className="btn btn bg-green-500 w-full text-white text-xl ">View Details</button>
        </div>
    </div>
</div>
</div>

<p className="text-3xl text-green-500 text-center font-bold mt-10">Go to this location if you want to contact us</p>

<div>
            <div style={{ height: '500px', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: googleMapAPIKey }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={defaultProps.center.lat}
                        lng={defaultProps.center.lng}
                        text="My Home"
                    />
                </GoogleMapReact>
            </div>

        </div>

        
      </div>
    </div>
  );
};

export default Home;
