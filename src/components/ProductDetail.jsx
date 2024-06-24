import React from 'react'
import { useParams } from 'react-router-dom'
import { useSingleProduct } from '../custom/useSingleProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../app/productSlice';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
  const dispatch = useDispatch()
    const{id} = useParams()
    // console.log(id);
    useSingleProduct(id)

    const singleProduct = useSelector((store) => store.products.singleProduct)
    if(!singleProduct) return
    // console.log(singleProduct);

    const{category,description,image,price,rating,title} = singleProduct
    

   const handleCart = () => {
    // console.log("inside cart adding");
      dispatch((addCart(singleProduct)))
      return toast.success('🛒Added to Cart!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
   }


  return (
    <div className=' max-w-[1200px] mx-auto py-5 my-3 font-bold p-10'>
       <h1 className=' text-xl md:text-3xl font-bold text-slate-600 py-2 mb-8 my-4'>{title}</h1>

       <div className=''>
        <img src={image} className=' w-[150px] md:w-[300px]'  />
       </div>
       <div>
        <p className=' text-sm text-gray-400 py-2'>{description}</p>
        <h2 className=' font-bold text-slate-500'>Category: {category}</h2>
        <h2>Price: Rs {price}</h2>
        <div className=' flex justify-between'>
        <div>
        <h2>Rating:</h2>
        <p>Count: {rating.count}</p>
        <p>Rate: {rating.rate}⭐</p>
        </div>
        <div>
          <button className=' active:bg-black active:text-white p-2 border border-black rounded-md hover:bg-gray-100 transition-all duration-150 ease-out' onClick={handleCart}>Add to Cart</button>
        </div>
        </div>
        
       

       </div>

    </div>
  )
}

export default ProductDetail