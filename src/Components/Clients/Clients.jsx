// import React from 'react'

import { test } from "../../assets/assets"

const Clients = () => {
    return (
        <div>
            <div className="my-[2rem] px-[3rem] md:px-[6rem]">
                <div className="text-center flex flex-col">
                    <p className="text-green-600 text-[1.2rem]">-- Some Testimonial --</p>
                    <h2 className=" text-2xl md:text-4xl font-bold text-gray-600 ">Feedback From Happy Clients</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center mt-[4rem] gap-8">
                {
                    test.map((i) => {
                        return (
                            <>
                                <div key={i.id} className="w-[22rem] flex flex-col justify-center items-center bg-[#f1f7ee] p-[1.5rem]">

                                    <div className=" flex flex-col justify-center items-center">
                                        <div className="img flex gap-6">
                                            <p className="text-4xl text-gray-500">❝</p>
                                            <img src={i.img} alt="" className="rounded-full"/>
                                            <p className="text-4xl text-gray-500">❞</p>
                                        </div>
                                        <div className="mt-6">
                                        <p>⭐⭐⭐⭐⭐</p>
                                        </div>
                                    </div>

                                    <div className="text-center flex flex-col gap-[1.2rem] mt-4">
                                        <p className="text-gray-600">{i.des}</p>
                                        <h3 className="font-bold text-[1.2rem]">{i.name}</h3>
                                        <p className="text-green-500 font-semibold">{i.field}</p>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default Clients