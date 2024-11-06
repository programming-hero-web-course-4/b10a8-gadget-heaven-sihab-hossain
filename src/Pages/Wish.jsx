import { useEffect, useState } from "react";
import { getWishListData } from "../Utilitis/utilitis";
import WishListData from "./WishListData";

const Wish = () => {
    const [datas, setDatas] = useState ([])
    useEffect(()=>{
        const gadget = getWishListData()
        setDatas(gadget)
    },[])
    console.log(datas);
    return (
        <div className="container mx-auto p-5">
            
                <div>
                    <h1 className="text-2xl font-bold">Wishlist</h1>
                </div>
                

           

        <div className="p-5 mt-10">
            {
                datas.map(data => (
                    <WishListData key={data.product_id} data={data}></WishListData>
                ))
            }
        </div> 
        </div>
    );
};

export default Wish;