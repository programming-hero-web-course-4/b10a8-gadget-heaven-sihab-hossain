/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { GiRoyalLove } from "react-icons/gi";
import { addToCart, addToWish, getWishListData} from "../Utilitis/utilitis";


const Details = () => {
  const data = useLoaderData([]);
  const { product_id } = useParams();
  const [gadgets, setGadgets] = useState([]);
  const [added, setAdded] = useState(false)
  useEffect(() => {
    const gadget = data.find((gadget) => gadget.product_id == product_id);
    setGadgets(gadget);
    const wishData = getWishListData()
    const isExist = wishData.find (item => item.product_id == gadgets.product_id)
    if(isExist){
      setAdded(true)
    }
  }, [data, gadgets.product_id, product_id]);

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = gadgets || {};


  const handleCartClick = (data) => {
    addToCart(data);
   
  };
  const handleWishClick = (data) =>{
    addToWish(data)
    setAdded(true)
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
        <figure className="object-cover w-[450px]">
          <img className="object-cover p-2  " src={product_image} alt="Movie" />
        </figure>
        <div className="card-body w-[600px] space-y-3">
          <h2 className="card-title text-3xl">{product_title}</h2>
          <h3 className="text-2xl">Price:$ {price}</h3>
          <h3
            className={`${
              availability
                ? "btn border border-green-500 bg-green-200 w-1/4 rounded-full"
                : "btn border border-red-500 bg-red-300 w-1/4 rounded-full"
            }`}
          >{`${availability ? "In Stock" : "Out of Stock"}`}</h3>
          <p className="w-3/4 text-gray-600">{description}</p>
          <p className="font-semibold text-lg">Specification:</p>
          <ul>
            {Specification?.map((spec, index) => (
              <li className="text-gray-600" key={index}>
                {index + 1}. {spec}
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold">Rating: {rating}</p>
          <p>
            {/* <ReactStars
              count={rating}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            /> */}
          </p>
          <div className="card-actions ">
            <button
              onClick={() => handleCartClick(gadgets)}
              className="btn bg-[#9538E2] text-white text-lg hover:bg-[#9538E2]"
            >
              Add To Card <FiShoppingCart />
            </button>
            <button disabled={added} onClick={() => handleWishClick(gadgets)} className="btn border border-gray-500 rounded-full hover:bg-[#9538E2] text-2xl hover:text-white">
              <GiRoyalLove />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
