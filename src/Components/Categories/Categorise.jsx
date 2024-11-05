/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import Button from "../Button/Button";

const Categorise = ({buttons}) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-4 gap-10 mt-10">
        <div className="col-span-1">
         
        <Button buttons={buttons}></Button>
         
          
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 ">
         <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorise;