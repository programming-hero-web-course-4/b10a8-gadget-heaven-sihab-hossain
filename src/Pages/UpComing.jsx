import { useEffect } from "react";

const UpComing = () => {
    useEffect(()=>{
        document.title = "Gadgets | UpComing Product" 
      },[])
    return (
       <div>
         <div className="hero bg-[#9538E2] py-10 relative  w-full">
      <div className="hero-content text-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold">Up Coming Products</h1>
          <p className="py-6 text-gray-100 w-3/4 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
         
        </div>
      </div>
    </div>
       </div>
    );
};

export default UpComing;