/* eslint-disable no-useless-escape */
// import React from 'react'

import { hero } from "../../images/images"

const Hero = () => {
  return (
    <div className=" px-[3rem] flex justify-around items-center mt-5 bg-[#f1f7ee] h-[35rem] relative ">

    <div className="flex flex-col gap-4">
        <p className="text-green-700 font-bold">25% off all products.</p>
        <h2 className="text-4xl sm:text-6xl font-semibold ">Qualityful <strong className="text-green-700" >organic</strong>  <br /> fruit & <strong className="text-green-700">vegetables. </strong> </h2>
        <p className="text-gray-600 text-[1.1rem] font-semibold">It has survived not only five centuries also there leaped.</p>
        <div>
        <button className="font-bold text-xl bg-green-500 py-3 px-[3rem] rounded-full text-white">Shop Now</button>
        </div>
        {/* <img src={hero.hero_left} alt="" /> */}
    </div>
    <div className="hidden lg:block absoulte top-0 right-1">
        <img src={hero.hero_banner} alt="" width="500px"/>
    </div>

    <div>
        {/* <img src={hero.hero_right} alt="" /> */}
    </div>
    </div>
  )
}

export default Hero