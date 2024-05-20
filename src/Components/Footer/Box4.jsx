// import React from 'react'

import { brand } from "../../assets/assets"

const Box4 = () => {
  return (
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Newsletter</h2>
        <p>You will be notified when somthing new will be appear. </p>
        <div className="w-[16rem] flex justify-between px-2  bg-white py-3 rounded-sm ">
            <input type="email" name="email" id="" placeholder="Email Address" className="border-transparent"/>
            <img src={brand.email} alt="" width="20rem" />
        </div>
    </div>
  )
}

export default Box4