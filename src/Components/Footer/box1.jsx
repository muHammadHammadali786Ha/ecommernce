// import React from 'react'


// import { brand } from "../../assets/assets"
import { TfiTwitter } from "react-icons/tfi"
import { BsSkype } from "react-icons/bs"
import { LiaLinkedin } from "react-icons/lia"
import { FaFacebookF } from "react-icons/fa6"

FaFacebookF
// import { BsFacebook } from 'react-icons/bs';
const box1 = () => {
    const socialLinks = [
        {
            logo: <FaFacebookF />
        },
        {
            logo: <TfiTwitter />
        },
        {
            logo: <BsSkype />
        },
        {
            logo: <LiaLinkedin />
        },
    ]
    return (
        <div className="flex flex-col gap-6">

            <p className='text-3xl font-bold'>Organ<span className='text-green-600'>ica</span></p>

            <p>
                t was popularised in the 1960s with the release of Letraset sheets containing Lorem passages and more recently with desktop publishing software like including.
            </p>

            <div className="flex gap-3">
                {
                    socialLinks.map((i,index) => {
                        return (
                            <div key={index} className="w-[2rem] h-[2rem] border-[1px] border-gray-400 flex justify-center items-center rounded-full hover:border-green-500">
                               <p className="hover:text-green-600">

                               {i.logo}
                               </p>
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default box1