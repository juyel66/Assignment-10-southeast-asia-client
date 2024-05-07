import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyListCard from "./MyListCard/MyListCard";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const MyList = () => {
  const { loggedInUser } = useContext(AuthContext); // আপনার AuthContext থেকে loggedInUser কনটেক্সট থেকে প্রাপ্ত করুন

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (loggedInUser) {
      // যদি লগইন ইউজার থাকে, তাহলে তার ইমেইলের উপর ভিত্তি করে সার্ভার থেকে তথ্য অনুরোধ করুন
      fetchUserData(loggedInUser.email);
    }
  }, [loggedInUser]);

  // সার্ভার থেকে ডেটা পোষ্ট করার ফাংশন
  const fetchUserData = async (email) => {
    try {
      // সার্ভারে একটি GET অনুরোধ প্রেরণ করুন, লগইন ইউজারের ইমেইল সহ
      const response = await fetch(`https://southeast-asia-server-three.vercel.app/users?email=${email}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
 <Fade>
     <div>
      <Helmet> <title>My List</title></Helmet>
      {/* লগইন ইউজার থাকলে, স্বাগতম মেসেজ দেখান */}
      {loggedInUser ? (
        <div>
          <h2 className="lg:text-3xl text-center mt-10 ">My Email: {loggedInUser.email}</h2>
          {/* সার্ভার থেকে ডেটা পোস্ট করা হলে, তথ্য দেখান */}
          {userData && (
            <div>
              <h2 className="text-3xl font-bold text-center  mt-10">My List All Data: {userData.length}</h2>
              <ul className=" ">
        
            <div className="flex justify-between lg:pl-16 mb-2 font-bold lg:mt-10 lg:pr-16">
              <p className="lg:flex   hidden"></p>
              <p className="lg:mr-[170px]">Country</p>
              <p className="lg:mr-[140px]">Sopts Name</p>
              <p className="lg:mr-[70px]"> Avarege Cost</p>
              <p> Action</p>
            </div>
         
                {/* ফিল্টারকৃত তথ্যগুলোর ম্যাপিং করুন এবং কার্ড রুপে দেখান */}
                {userData.map((item, idx) => (
                  <MyListCard key={item._id} idx={idx}  item={item} userData={userData} setUserData={setUserData}  />
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>Please log in to view user data</p>
      )}
    </div>
 </Fade>
  );
};

export default MyList;
