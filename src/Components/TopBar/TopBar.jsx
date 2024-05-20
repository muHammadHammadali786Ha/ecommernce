// import React from 'react'

import { useContext } from "react"
import { StoreContext } from "../Context/Store"

const TopBar = () => {
  const {loginUser} = useContext(StoreContext);
  return (
    <div className="w-full flex items-center justify-center bg-gray-900 py-[0.5rem]">
       {loginUser ?<p className="text-green-500 font-semibold"> {loginUser} </p> :<p className="text-green-500 font-semibold">Free shipping for all order of $105</p>}
    </div>
  )
}

export default TopBar