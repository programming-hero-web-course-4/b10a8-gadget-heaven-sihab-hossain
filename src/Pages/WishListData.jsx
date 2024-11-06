/* eslint-disable react/prop-types */

const WishListData = ({data}) => {
    const {
        product_title,
        product_image,
        price,
        description,
        
        
        
      } = data || {};
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-2xl mb-8 border border-gray-300 p-4 ">
        <figure className="w-64 ">
          <img className="object-cover"
            src={product_image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-lg font-bold">Description: <span className="text-gray-500 text-sm font-normal">{description}</span></p>
          <p className="text-lg font-bold">Price: {price}</p>
         
          <div className="card-actions justify-between">
            <button className="btn bg-purple-600 rounded-3xl text-white">Add To cart</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default WishListData;