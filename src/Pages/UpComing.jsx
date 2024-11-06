import { useEffect } from "react";

const UpComing = () => {
    useEffect(()=>{
        document.title = "Gadgets | UpComing Product" 
      },[])
    return (
        <div className="bg-red-800">
            upcoming
        </div>
    );
};

export default UpComing;