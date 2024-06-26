import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilteredProducts } from '../app/productSlice'

const CategoryItem = ({item,setShowIndex,setFalse,showChecked}) => {
     const dispatch = useDispatch()

     const  data = useSelector((store) => store.products.allProducts)
     const all = [...data]

    const filterCategory = (item) => {
        if(!showChecked){
            const filterData = all.filter((product) => product.category == item)
            dispatch((addFilteredProducts(filterData)))

        }

        else{
            dispatch((addFilteredProducts(data)))
        }
       
    }

    const handleClick = () => {
          if(showChecked){
            setFalse()
          }
          else{
            setShowIndex()
          }
    }


  return (
    <div className='  flex mr-1  my-2 items-center'>
        <input className=' cursor-pointer   md:w-3' id={item} type='checkbox' name='categoryItem'  checked={showChecked} onClick={handleClick} onChange={() => filterCategory(item)}/>
        <label className=' w-full text-[10px] md:text-[14px] font-bold leading-snug cursor-pointer ml-1 md:ml-2' htmlFor={item}>{item}</label>
    </div>
  )
}

export default CategoryItem