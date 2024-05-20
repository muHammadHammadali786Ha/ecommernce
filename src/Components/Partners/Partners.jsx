// import React from 'react'
// import '../Subscribe/Subscribe.css'
import { Partner } from "../../assets/assets"
const Partners = () => {
  return (
    <div className="w-full bg-green-500 sm:h-[40rem] my-[5rem] relative flex flex-wrap">   
        <div className="absolute bottom-0">
                <img src="src\images\partner-left-bg.png" alt="" />
            </div>

        <div className="flex flex-col justify-center items-center md:ml-[15rem] gap-4">

            <div className="flex flex-col justify-center items-center">
                <p className="text-gray-200 text-2xl font-semibold">-- Organic Food --</p>
                <p className="text-white text-2xl sm:text-4xl font-bold">Trusted Partners</p>
            </div>
           <div className="flex flex-wrap justify-center gap-3 md:gap-6 items-center ">
                {
                    Partner.map((i)=>{
                        return(
                            <div key={i.id}>
                                <img src={i.partnerLogo} alt="" />
                            </div>
                        )
                    })
                }
           </div>
                </div>



            <div className="right absolute right-0 top-0">
            <img src="src\images\partner-right-bg.png" alt="" />
            </div>
    </div>
  )
}

export default Partners