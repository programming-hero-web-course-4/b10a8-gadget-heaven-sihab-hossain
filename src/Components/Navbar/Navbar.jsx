import { BiCart } from "react-icons/bi";
import { GiRoyalLove } from "react-icons/gi";
import {  NavLink, useLocation } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const location = useLocation();
 
  return (
    <div className={`${location.pathname==='/'? "bg-[#9538E2] text-white":"bg-white text-green-950"} container mx-auto navbar   rounded-t-2xl p-5`}>
      <div className="navbar-start">
        
        <a className="text-2xl font-semibold btn bg-red-200 border-none">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex flex-row gap-6 text-[16px]">
         <NavLink className={`${location.pathname==='/'? "btn bg-red-500 border-none":"btn bg-red-200 "}`} to={'/'}>Home</NavLink >
         <NavLink className={`${location.pathname==='/statistics'? "btn bg-red-500 ":"border-none btn bg-red-200 text-black "}`} to={'/statistics'}>Statistics</NavLink >
         <NavLink className={`${location.pathname==='/dashbord' ? "btn bg-red-500":"border-none btn bg-red-200 text-black"}`} to={'/dashbord'}>Dashbord</NavLink >
         <NavLink className={`${location.pathname==='/upcoming'? "btn bg-red-500":"border-none btn bg-red-200 text-black"}`} to={'/upcoming'}>UpComing Gadgets</NavLink >
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn bg-red-200 border-none text-2xl "><BiCart /></a>
        <a className="btn bg-red-200 border-none text-xl"><GiRoyalLove /></a>
        
      </div>
    </div>
  );
};

export default Navbar;
