import { useEffect, useRef, useState } from "react";
import { BiSort } from "react-icons/bi";
import { getData } from "../Utilitis/utilitis";
import CartData from "./CartData";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const gadget = getData();
    setDatas(gadget);
  }, []);

  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("addCart"));
    if (cartData && Array.isArray(cartData)) {
      const total = cartData.reduce((accumulator, product) => {
        return accumulator + (product.price || 0);
      }, 0);
      setTotalPrice(total.toFixed(2));
    }
  }, []);

  const handleSortData = () => {
    const sortedData = [...datas].sort((a, b) => b.price - a.price);
    setDatas(sortedData);
  };
  const modalRef = useRef(null);
  const handleBuyProduct = () =>{
    setTotalPrice(0)
    if (modalRef.current){
        modalRef.current.showModal();
        setDatas([])
    }
    setReducePrice(totalPrice)
    localStorage.clear()
  }
 const [ reducePrice ,setReducePrice] = useState()
 
  const handleClose = () =>{
    setTotalPrice(0)
    
    navigate('/')
  }
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-xl font-bold mr-24">Total cost:  {totalPrice}</h1>
          <button
            onClick={handleSortData}
            className="btn border border-t-purple-600 border-l-purple-600 border-r-orange-500 border-b-yellow-600 rounded-3xl text-purple-700"
          >
            Short By Price <BiSort />
          </button>
          <button onClick={handleBuyProduct} className="btn bg-purple-500 text-white rounded-3xl">
            Purchase
          </button>
        </div>
      </div>

      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog ref={modalRef} className="modal">
        <div className="modal-box flex flex-col justify-center items-center">
          <p className="text-6xl text-green-500 mb-2"><IoCheckmarkDoneCircleSharp /></p>
          <h3 className="font-black text-xl p-3  border-b border-gray-400">Payment Successfully</h3>
          <p className="mt-2">Thanks For Puschasing</p>
          <p className="">
         Total: {reducePrice}
          </p>
          <div className="modal-action">
            <form method="dialog">
             
              <button onClick={handleClose} className="btn bg-green-500 text-white text-lg">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="p-5 mt-10">
        {datas.map((data) => (
          <CartData key={data.product_id} data={data}></CartData>
        ))}
      </div>
    </div>
  );
};

export default Cart;
