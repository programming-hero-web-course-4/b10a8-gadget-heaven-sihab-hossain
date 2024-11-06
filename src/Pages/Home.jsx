import { useLoaderData } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'
import Categorise from '../Components/Categories/Categorise';
import { useEffect } from 'react';
const Home = () => {
  const buttons = useLoaderData ();
  useEffect(()=>{
    document.title = "Gadgets | Home" 
  },[])
  return (
    
    <div className='container mx-auto'>
      <div className="hero bg-[#9538E2] rounded-b-2xl py-10 relative pb-52">
        <div className="hero-content text-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 text-gray-100 w-3/4 mx-auto">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn rounded-full bg-white hover:bg-black border-none hover:text-white">Shop Now</button>
          </div>
        </div>
      </div>
      <div className='w-[800px] h-[350px] mx-auto p-4 border border-gray-400 rounded-2xl absolute  left-[550px] bottom-36'>
        <img className='rounded-2xl h-full w-full' src={bannerImg} alt="" />
      </div>

      <div className=' mt-52'>
      <Categorise buttons={buttons}></Categorise>
      </div>
    </div>
  );
};

export default Home;
