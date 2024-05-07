import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Roots = () => {
    return (
        <div>
        <div className="lg:w-[1200px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
          
            
        </div>
        <div className="mt-20">
            <Footer></Footer>
            </div>

        </div>
    );
};

export default Roots;