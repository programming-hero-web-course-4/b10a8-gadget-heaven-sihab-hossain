import { BiCart } from "react-icons/bi";
import { FaClover } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        
        <a className="text-2xl font-semibold">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex flex-row gap-6 text-[16px]">
         <li>Home</li>
         <li>Statistics</li>
         <li>Dashbord</li>
         <li>UpComing Gadgets</li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-xl"><BiCart /></a>
        <a className="btn text-lg"><FaClover /></a>
        
      </div>
    </div>
  );
};

export default Navbar;
