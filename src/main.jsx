import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Components/Roots/Roots";
import AddTouristsSpot from "./Components/AddTouristsSpot/AddTouristsSpot";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Components/Login/Login";
import PrivetRout from "./PrivetRout/PrivetRout";
import Home from "./Components/Home/Home";
import AllTouristsSpot from "./Components/AllTouristsSpot/AllTouristsSpot";
import MyList from "./Components/MyList/MyList";
import ViewDetails from "./Components/ViewDetails/ViewDetails";
import UpdateTourists from "./Components/UpdateTouristS/UpdateTourists";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ViewDetailsSpots from "./Components/ViewDetailsSpots/ViewDetailsSpots";
import BangladeshCard from "./Components/BangladeshCard/BangladeshCard";
import BnViewDetails from "./Components/BangladeshCard/BnViewDetails";
import ThailandCard from "./Components/ThailandCard/ThailandCard";
import ThailandViewDetails from "./Components/ThailandCard/ThailandViewDetails";
import IndonesiaCard from "./Components/IndonesiaCard/IndonesiaCard";
import IndonesiaViewDetails from "./Components/IndonesiaCard/IndonesiaViewDetails";
import MalaysiaCards from "./Components/malaysiaCard/MalaysiaCards";
import MalaysiaViewDetails from "./Components/malaysiaCard/MalaysiaViewDetails";
import VietnamCard from "./Components/VietnamCard/VietnamCard";
import VietnamViewDetails from "./Components/VietnamCard/VietnamViewDetails";
import CambodiaCard from "./Components/CambodiaCard/CambodiaCard";
import CambodiaViewDetails from "./Components/CambodiaCard/CambodiaViewDetails";
import ContactUs from "./Components/ContactUs/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://southeast-asia-server-three.vercel.app/Countries')
      },
      {
        path: '/viewDetailsSpots/:_id',
        element: <PrivetRout><ViewDetailsSpots></ViewDetailsSpots></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Countries')

      },

      {
        path: "/AddTourists",
        element: <PrivetRout> <AddTouristsSpot></AddTouristsSpot> </PrivetRout>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/AllTouristsSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: ()=> fetch('https://southeast-asia-server-three.vercel.app/addTourist')
      },
      // https://southeast-asia-server-three.vercel.app
      {
        path:'/myList',
        element: <PrivetRout><MyList></MyList></PrivetRout>
      },
      {
        path: '/viewDetails/:_id',
        element: <PrivetRout><ViewDetails></ViewDetails></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/addTourist')
      },
      {
        path: '/updateTourist/:id',
        element: <UpdateTourists></UpdateTourists>,
        loader: ({params}) => fetch(`https://southeast-asia-server-three.vercel.app/addTourist/${params.id}`)
      },
      {
        path: '/BangladeshCard',
        element:<PrivetRout><BangladeshCard></BangladeshCard></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Bangladesh')
      },
      {
        path: '/BnViewDetails/:_id',
        element: <PrivetRout><BnViewDetails></BnViewDetails></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Bangladesh') 
      },
      {
        path: '/ThailandCard',
        element: <PrivetRout><ThailandCard></ThailandCard></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Thailand') 

      },
      {
        path: "/ThailandViewDetails/:_id",
        element: <PrivetRout><ThailandViewDetails></ThailandViewDetails></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Thailand') 
      },
      {
        path: '/IndonesiaCard',
        element: <PrivetRout><IndonesiaCard></IndonesiaCard></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Indonesia')
      },
      {
        path: '/IndonesiaViewDetails/:_id',
        element: <PrivetRout><IndonesiaViewDetails></IndonesiaViewDetails></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Indonesia')
      },
      {
        path: 'malaysiaCard',
        element: <PrivetRout><MalaysiaCards></MalaysiaCards></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Malaysia')
      },
      {
        path: '/MalaysiaViewDetails/:_id',
        element:<PrivetRout><MalaysiaViewDetails></MalaysiaViewDetails></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Malaysia')
      },
      {
        path: '/VietnamCard',
        element:<PrivetRout> <VietnamCard></VietnamCard></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Vietnam')
      },
      {
        path: '/VietnamViewDetails/:_id',
        element: <PrivetRout><VietnamViewDetails></VietnamViewDetails></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Vietnam')
      },
      {
        path: '/CambodiaCard',
        element: <PrivetRout><CambodiaCard></CambodiaCard></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Cambodia')
      },
      {
        path: '/CambodiaViewDetails/:_id',
        element: <PrivetRout><CambodiaViewDetails></CambodiaViewDetails></PrivetRout>,
        loader: () => fetch('https://southeast-asia-server-three.vercel.app/Cambodia')
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
