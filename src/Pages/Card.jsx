/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ gadget }) => {
  const { price, product_image, product_title,product_id } = gadget || {};

  return (
    <div>
      <div className="card bg-base-100 shadow-2xl border border-gray-300 p-2">
        <figure className="object-cover h-56">
          <img
            className="object-cover rounded-2xl"
            src={product_image}
            alt="gadget"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/card/${product_id}`}  className="btn bg-none border border-purple-500 rounded-full text-purple-600 hover:bg-purple-500 hover:text-white">
              View Details
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
