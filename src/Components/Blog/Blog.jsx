// import React from 'react'

import { blog, brand } from "../../assets/assets"

const Blog = () => {
    return (
        <div className="my-[2.5rem]  flex flex-col ">
            <p className="text-green-600 text-center">-- News and Blog --</p>
            <h2 className="text-gray-900 text-4xl mt-[1rem] mb-[2.5rem] text-center">Bright Side Vegetarianism</h2>

            <div className="flex gap-[2.5rem] flex-wrap justify-center items-center ">
                {
                    blog.map((item) => {
                        return(
                            <>
                                <div className="flex flex-col gap-2 w-[22rem] border-[1px] ">
                                    <div className="w-[22rem] border-[1.8rem] flex justify-center ">
                                        <img className="w-full" src={item.img} alt=""/>
                                    </div>

                                    <div className="flex flex-col gap-8 justify-center items-center px-8">
                                        <div className="flex justify-around gap-[2rem]">
                                            <div className="flex gap-2"><img className="w-[0.7rem]" src={brand.clander} alt="" /><p>{item.date}</p></div>
                                            <div className="flex gap-2"><img className="w-[1rem]" src={brand.heart} alt="" /><p>{item.like}</p></div>
                                        </div>
                                        <div className="mb-[2rem] flex flex-col gap-4">
                                            <p className="text-center font-semibold text-xl">{item.des}</p>
                                            <button className="px-[2rem] py-2 border-[1px] border-green-800 text-white bg-lime-700 hover:bg-lime-900 rounded-md font-semibold">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Blog