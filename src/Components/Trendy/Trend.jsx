// import React from 'react'

import { topProduct } from "../../assets/assets"
import './Trend.css';
const Trend = () => {
    return (
        <div className="px-[3rem] sm:px-[6rem] flex flex-col gap-20">
            <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-green-600 font-bold text-xl md:text-2xl italic">-- Organic Food --</p>
                <p className="text-gray-700 text-2xl md:text-4xl font-semibold">Trendy Products</p>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 mmd:grid-cols-3 gap-4 ">

                {
                    topProduct.map((i) => {
                        return (
                            
                            <div key={i.id} className="wrap flex justify-center items-center gap-4 bg-[#f1f7ee] w-full py-6 hover:border-[2px] duration-300 transition-all hover:border-green-700 rounded-md shadow-lg cursor-pointer relative">
                                <div className="">
                                    <img className="w-[3.5rem] sm:w-[7rem]" src={i.img} alt="" />
                                </div>
                                <div>
                                    <p className="text-[0.7rem]">⭐⭐⭐⭐⭐</p>
                                    <p className="font-bold text-[0.8rem] md:text-[1.2rem]">{i.name}</p>
                                    <p className="text-green-600">$85.7</p>
                                </div>

                                <div className="seek   absolute bottom-2 right-[7.4rem] flex opacity-0">
                                    {/* <div></div> */}
                                <button className='py-1 px-[0.8rem] bg-green-500 rounded-full text-white '>Add Cart</button>
                                </div>
                            </div>

                        )
                    })
                }




            </div>
        </div>
    )
}

export default Trend