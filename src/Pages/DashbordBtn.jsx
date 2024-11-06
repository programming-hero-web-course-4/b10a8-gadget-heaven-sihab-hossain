import { Link } from "react-router-dom";

const DashbordBtn = () => {
    return (
        <div>
              <Link to={'/cart'} className="btn rounded-full bg-transparent border-white text-lg text-white mr-5 w-36 hover:bg-black hover:border-none">
            Cart
          </Link>
          <Link to={'/wish'} className="btn rounded-full bg-white text-purple-700 hover:bg-black border-none text-lg hover:text-white w-36">
            Wishlist
          </Link>
        </div>
    );
};

export default DashbordBtn;