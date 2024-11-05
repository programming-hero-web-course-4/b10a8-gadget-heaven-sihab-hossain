// eslint-disable-next-line no-unused-vars, react/prop-types
const Details = ({price}) => {
    
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
      <div className="card card-side bg-base-100 shadow-xl absolute top-44">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{price}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
