import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[650px]">
                <Outlet></Outlet>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;