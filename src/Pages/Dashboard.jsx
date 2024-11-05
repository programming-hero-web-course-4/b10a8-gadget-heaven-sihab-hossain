
const Dashboard = () => {
    return (
        <div className="hero bg-[#9538E2] py-10 relative  w-full">
      <div className="hero-content text-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold">Dashboard</h1>
          <p className="py-6 text-gray-100 w-3/4 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn rounded-full bg-transparent border-white text-lg text-white mr-5 w-36 hover:bg-black hover:border-none">
            Cart
          </button>
          <button className="btn rounded-full bg-white text-purple-700 hover:bg-black border-none text-lg hover:text-white w-36">
            Wishlist
          </button>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;