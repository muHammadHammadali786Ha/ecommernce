/* eslint-disable no-unused-vars */
// import React from 'react'

import { json, useParams } from "react-router-dom"
import { topProduct } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../Context/Store";
import {  BsSubtract } from "react-icons/bs";
import {  BiPlus } from "react-icons/bi";
import { GrSubtract } from "react-icons/gr";


const Detail = () => {
  const { count,addCount,removeCount } = useContext(StoreContext);
  const id = useParams();
  console.log(typeof id.id);

  return (
    <>
      <h1 className="mx-[5rem] my-[2rem] text-3xl font-bold">Product Detail</h1>
      {/* <BsInstagram className="text-red-900 text-3xl font-extrabold"/> */}
      <div className="grid grid-cols-2 gap-16 w-full items-start px-[5rem]">
        <div>
          {
            topProduct.map((i) => {
              if (i.id == parseInt(id.id)) {
                return (
                  <div key={i.id} className="flex justify-center p-[2rem] bg-slate-100 shadow-lg rounded-md">
                    <img src={i.img} alt="" className="w-[20rem]" />
                  </div>
                )
              }
            })
          }
        </div>

        <div>
          {
            topProduct.map((i) => {
              if (i.id === parseInt(id.id)) {
                return (
                  <div key={i.id} className="flex flex-col gap-3">
                    <h2 className="text-3xl font-bold">{i.name}</h2>
                    <h4 className="text-green-400 font-bold text-2xl">${i.price}</h4>
                    <p>⭐⭐⭐⭐⭐  <span>( Review )</span> </p>
                    <p className="text-start text-slate-400 text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate voluptas quibusdam aliquid. Voluptate, culpa voluptatum. Architecto fugit mollitia reprehenderit nemo incidunt! Labore hic delectus praesentium quod! </p>
                    <div className="flex gap-[0.7rem]">
                      <div className="bg-green-500 w-[2rem] h-[2rem] rounded-full flex justify-center items-center text-center">
                        <button className=" text-xl text-white" onClick={()=>removeCount(i.id)}> <GrSubtract/> </button>
                      </div>

                      <p className="text-xl">{count[i.id]? count[i.id]:0} </p>

                      <div className="bg-green-500 w-[2rem] h-[2rem] rounded-full flex justify-center items-center text-center">
                        <button className=" text-xl text-white" onClick={()=>addCount(i.id)}> <BiPlus/> </button>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </>

  )
}

export default Detail