import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import  { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div>
             <Toaster />
            <Navbar></Navbar>
            <div className="min-h-[650px]">
                <Outlet></Outlet>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;