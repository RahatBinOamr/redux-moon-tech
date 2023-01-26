import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart, removeCart } from "../Redux/ActionCreator/productsAction";
import { AiFillDelete} from 'react-icons/ai';
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {pathname}=useLocation()

  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
      key={product._id}
    > 
    
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, i) => {
            return (
              <li key={i} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {!pathname.includes("cart")&&<button className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
        onClick={()=>dispatch(addToCart(product))}
        >
          Add to cart
        </button>}
        {pathname.includes("cart")&&<button className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white flex justify-between align-center text-bold"
        onClick={()=>dispatch(removeCart(product.id))}
        ><p className="text-xl font-semibold">remove</p>
          <AiFillDelete size={20}/> 
        </button>}
        {!pathname.includes("cart")&&<button
          title="Add to wishlist"
          className="bg-indigo-500  py-1 px-2 rounded-full"
        >
          <BiListPlus className="text-white" />
        </button>}
        {pathname.includes("cart")&&<div className="bg-teal-500 text-white w-10 h-10 grid place-items-center rounded-full"> <p>{product.quantity} </p> </div>}
      </div>
    </div>
  );
};

export default ProductCard;
