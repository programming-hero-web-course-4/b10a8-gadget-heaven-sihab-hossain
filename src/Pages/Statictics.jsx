import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  
  BarChart,
} from 'recharts';
const Statictics = () => {
  useEffect(()=>{
    document.title = "Gadgets | Statictics" 
  },[])
  const data = useLoaderData()
  console.log(data);
  return (
    
   <div>
     <div className="hero bg-[#9538E2] py-10 relative  w-full">
      <div className="hero-content text-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold">Statistics</h1>
          <p className="py-6 text-gray-100 w-3/4 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
         
        </div>
      </div>
    </div>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-5">Statistics</h1>
      <div className="mt-16">
      {/* <LineChart width={1000} height={500} data={data}
      >
        <XAxis dataKey="product_title" />
        <YAxis></YAxis>
        <Line dataKey="price" stroke="black"></Line>
        <Bar type="monotone" dataKey='price' barSize={20} fill="yellow"></Bar>
        <Area type="monotone" dataKey="rating" stroke="red" fill="#8884d8" ></Area>
      </LineChart> */}
      <BarChart
          width={1250}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis className="text-sm" dataKey="product_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="purple" minPointSize={5}>
           
          </Bar>
          <Bar dataKey='rating' fill="red" minPointSize={25} />
        </BarChart>
      </div>
    </div>
   </div>
  );
};

export default Statictics;
