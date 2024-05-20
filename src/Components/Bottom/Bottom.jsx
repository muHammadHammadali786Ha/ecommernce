// import React from 'react'

import { brand } from "../../assets/assets"

const Bottom = () => {
  return (
    <div className="py-4 bg-[#1d252b] flex justify-between px-[6rem] items-center text-white ">
        <div className="flex gap-1">
        <img src={brand.copyright} alt="" width="13rem" /> 
        <p> 2022 <strong className="text-green-600">codewtihhammad.</strong> All Rights Reserved</p>
        </div>
        <div className="flex gap-2">
            <p>Term and Service</p>
            <p>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Bottom