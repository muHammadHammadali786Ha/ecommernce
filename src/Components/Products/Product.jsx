// import React from 'react'
import { useContext } from "react"
import { topProduct } from "../../assets/assets"
import { StoreContext } from "../Context/Store"
import { Link } from "react-router-dom"

const Product = () => {
    const {addCount} = useContext(StoreContext);
  return (
    <div className=" px-[3rem] md:px-[6rem] flex flex-col gap-20 mt-8">
    <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-green-600 font-bold text-2xl italic">-- Organic Food --</p>
        <p className="text-gray-700 text-2xl md:text-4xl font-semibold">All Organic Products</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mmd:grid-cols-4  gap-[2rem] ">

        {
            topProduct.map((i) => {
                return (
                    <Link to={`/detail/${i.id}`} key={i.id}>
                    <div key={i.id} className="flex flex-col justify-center items-center gap-[1rem] bg-[#f1f7ee] py-6 w-full h-[26rem] hover:border-[2px] duration-300 transition-all hover:border-green-700 rounded-md shadow-lg ">
                        <div className="">
                            <img className=" sm:w-[6rem] md:w-[10rem] " src={i.img} alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <p className="text-[0.7rem]">⭐⭐⭐⭐⭐</p>
                            <p className="font-bold text-[1.2rem]">{i.name}</p>
                            <p className="text-green-600">${i.price}</p>
                            <button className='py-1 px-[1.4rem] bg-green-500 rounded-full  text-white font-semibold' onClick={()=>addCount(i.id)}>Add Cart</button>

                        </div>
                        
                        
                    </div>
                        </Link>

                )
            })
        }




    </div>
</div>
  )
}

export default Product