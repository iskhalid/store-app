import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  // console.log(product);
  const { id, description, price,image,title } = product;
  return (
    <Link to={"/product-detail/"+id}>
 <div className=" border border-gray-300 bg-white p-1 md:p-4 rounded-lg w-[80px] md:w-56 text-center pt-6 cursor-pointer h-[140px] md:h-[310px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-95 hover:shadow-black duration-150 transition-all ease-in ">
      <div className=" w-11/12 ml-2 md:ml-4">
        <img className=" w-11/12 aspect-[1/4] mb-2 object-contain max-h-10 md:max-h-48" src={image} />
      </div>
      <div>
        <h2 className=" text-gray-600 font-semibold text-[7px] md:text-sm">{title}</h2>
      </div>
    </div>
    </Link>
   
  );
};

export default Card;
