// import React from 'react'
import { data } from "./offer"
const Offer = () => {
    return (
        <div>
            <div className="flex gap-8 mx-[1.3rem] sm:mx-[3rem] justify-center mt-[3rem]" >
                {
                    data.map((item) => (
                        <div key={item.id} className="flex flex-wrap-reverse md:flex-nowrap gap-3 justify-center items-center bg-[#f1f7ee] w-[35rem] px-[1.5rem] p-[1.3rem] md:p-[3rem]">
                            <div className="flex flex-col gap-5">
                                <p className="text-green-500 font-bold">{item.offer}</p>
                                <p className="text-xl md:text-2xl font-bold">{item.title}</p>
                                <div>
                                <button className=" bg-green-500 py-2 px-[1rem] md:py-3 md:px-[1.5rem] rounded-full text-white">Shop Now</button>
                                </div>

                            </div>
                            <div>
                                <p><img src={item.img} alt="" /></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Offer