import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { TbJewishStarFilled } from "react-icons/tb";
import { addToCart } from "../Utilitis/utilitis";

 
const Details = () => {
    const data = useLoaderData([]);
    const {product_id} = useParams();
    const [gadgets, setGadgets]= useState([]);
    useEffect(() => {
      
          const gadget = data.find(gadget => gadget.product_id == product_id);
          setGadgets(gadget);
    
  }, [data, product_id]);

    const {product_title,product_image,price,description,Specification,availability,rating} = gadgets || {};

    // const handleCart = (gadgets) => {
    //   addFavourite(gadgets)
    // }
    // const handleWishList = (data) => {
    //   addFavourite(data)
    // }
   const handleClick = (data) =>{
    addToCart(data)
   }
  return (
    <div className="hero bg-[#9538E2] py-10 relative  w-full pb-36">
      <div className="hero-content text-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold">Product Details</h1>
          <p className="py-6 text-gray-100 w-3/4 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl absolute top-44 ">
        <figure className="object-cover">
          <img className="object-cover p-2"
            src={product_image}
            alt="Movie"
          />
        </figure>
        <div className="card-body w-[600px] space-y-3">
          <h2 className="card-title text-3xl">{product_title}</h2>
          <h3 className="text-2xl">Price:$ {price}</h3>
          <h3 className=  {`${availability? "btn border border-green-500 bg-green-200 w-1/4 rounded-full":"btn border border-red-500 bg-red-300 w-1/4 rounded-full"}`}>{`${availability? "In Stock":"Out of Stock"}`}</h3>
          <p className="w-3/4 text-gray-600">{description}</p>
          <p className="font-semibold text-lg">Specification:</p>
          <ul>
            
          {Specification?.map((spec, index) => 
                    <li className="text-gray-600" key={index}>{index + 1}. {spec}</li>
                )}
          </ul>
          <p className="text-lg font-semibold">Rating: {rating}</p>
          <div className="card-actions ">
            <button onClick={()=> handleClick(gadgets)} className="btn bg-[#9538E2] text-white text-lg hover:bg-[#9538E2]">Add To Card <FiShoppingCart /></button>
            <button  className="btn border border-gray-500 rounded-full hover:bg-[#9538E2] text-lg hover:text-white"><TbJewishStarFilled /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
