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
            <div className="flex justify-between">
                <div>
                    <h1 className="text-xl font-bold">Cart</h1>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <h1 className="text-xl font-bold mr-24">Total cost: </h1>
                    <button className="btn border border-t-purple-600 border-l-purple-600 border-r-orange-500 border-b-yellow-600 rounded-3xl text-purple-700" >Short By Price </button>
                    <button className="btn bg-purple-500 text-white rounded-3xl">Purchase </button>
                </div>

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