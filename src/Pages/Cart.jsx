import { useEffect, useRef, useState } from "react";
import { BiSort } from "react-icons/bi";
import { getData } from "../Utilitis/utilitis";
import CartData from "./CartData";
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
   
    if (modalRef.current){
        modalRef.current.showModal();
        
    }
  }
 
  const handleClose = () =>{
    setTotalPrice(0)
    setDatas([])
  }

  return (
    <div className="container mx-auto p-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-xl font-bold mr-24">Total cost: {totalPrice}</h1>
          <button
            onClick={handleSortData}
            className="btn border border-t-purple-600 border-l-purple-600 border-r-orange-500 border-b-yellow-600 rounded-3xl text-purple-700"
          >
            Short By Price <BiSort />
          </button>
          <button onClick={handleBuyProduct} className="btn bg-purple-500 text-white rounded-3xl">
            Purchase{" "}
          </button>
        </div>
      </div>

      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{totalPrice}</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
             
              <button onClick={handleClose} className="btn">Close</button>
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
