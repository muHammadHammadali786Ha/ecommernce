/* eslint-disable react/prop-types */
import {   NavLink } from "react-router-dom"
// import Add from "./Add"

// import React from 'react'

const Admin = (props) => {
  return (
    <div className="w-full flex gap-4 px-8">

        <div className="w-[20%] bg-gray-400 h-[50rem] flex flex-col justify-start items-end pt-[5rem] gap-[2rem]">

            <NavLink to="/admin/add" className="font-bold text-white text-xl border-[0.8px] px-[1rem] py-2 border-r-0">
                Add Prodcuts
            </NavLink>
            <NavLink to="/admin/list" className="font-bold text-white text-xl border-[1px] px-[1rem] py-2 border-r-0">
                List Products
            </NavLink>
            <NavLink className="font-bold text-white text-xl border-[1px] px-[1.3rem] py-2 border-r-0">
                User Profile
            </NavLink>
        </div>

        <div className="w-[80%] ">

                {props.add}
        </div>
        
    </div>
  )
}

export default Admin