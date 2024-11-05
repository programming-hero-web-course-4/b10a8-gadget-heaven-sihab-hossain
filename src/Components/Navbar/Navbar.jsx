import { BiCart } from "react-icons/bi";
import { FaClover } from "react-icons/fa6";
import {  NavLink, useLocation } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const location = useLocation();
 
  return (
    <div className={`${location.pathname==='/'? "bg-[#9538E2]":"bg-white text-gray-950"} container mx-auto navbar  text-white rounded-t-2xl p-5 `}>
      <div className="navbar-start">
        
        <a className="text-2xl font-semibold">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex flex-row gap-6 text-[16px]">
         <NavLink to={'/'}>Home</NavLink >
         <NavLink to={'/statistics'}>Statistics</NavLink >
         <NavLink to={'/dashbord'}>Dashbord</NavLink >
         <NavLink to={'/upcoming'}>UpComing Gadgets</NavLink >
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn text-xl"><BiCart /></a>
        <a className="btn text-lg"><FaClover /></a>
        
      </div>
    </div>
  );
};

export default Navbar;
