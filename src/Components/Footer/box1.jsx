// import React from 'react'

import { brand } from "../../assets/assets"

// import { BsFacebook } from 'react-icons/bs';
const box1 = () => {
    return (
        <div className="flex flex-col gap-6">

            <p className='text-3xl font-bold'>Organ<span className='text-green-600'>ica</span></p>

            <p>
                t was popularised in the 1960s with the release of Letraset sheets containing Lorem passages and more recently with desktop publishing software like including.
            </p>

            <div className="flex gap-3">
                <div className="w-[2rem] h-[2rem] border-[1px] border-gray-400 flex justify-center rounded-full hover:border-green-500">
                    <img src={brand.fb} alt="" width="20rem" />
                </div>

                <div className="w-[2rem] h-[2rem] border-[1px] border-gray-400 flex justify-center rounded-full hover:border-green-500">
                    <img src={brand.tw} alt="" width="20rem" />
                </div>

                <div className="w-[2rem] h-[2rem] border-[1px] border-gray-400 flex justify-center rounded-full hover:border-green-500">
                    <img src={brand.skype} alt="" width="20rem" />
                </div>

                <div className="w-[2rem] h-[2rem] border-[1px] border-gray-400 flex justify-center rounded-full hover:border-green-500">
                    <img src={brand.ld} alt="" width="20rem" />
                </div>
            </div>

        </div>
    )
}

export default box1