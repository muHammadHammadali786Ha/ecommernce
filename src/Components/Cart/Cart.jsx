// import React from 'react'

import { useContext, } from "react"
import { StoreContext } from "../Context/Store"
import { topProduct } from "../../assets/assets";

const Cart = () => {
  const { count, getTotalCartAmount,removeCount } = useContext(StoreContext);
  

  return (
    <div className="w-[80%] mx-auto flex justify-between ">
      <div>

        <div className="font-bold text-xl text-gray-700 grid grid-cols-5 gap-8 my-6 ">
          <p>Item Image</p>
          <p>Item Title</p>
          <p>Item Price</p>
          <p>Item Count</p>
          <p>Item Remove</p>

        </div>
        {/* <div className="flex flex-col"> */}

        {
          topProduct.map((item) => {
            if (count[item.id] > 0) {
              return (
                <>
                  <div key={item.id} className="font-semibold grid grid-cols-5 gap-10 items-center">
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{count[item.id]}</p>
                    <p className="text-xl cursor-pointer" onClick={()=>removeCount(item.id)}>X</p>
                  </div>
                  <hr />
                </>
              )
            }

          })
        }
        {/* </div> */}
      </div>

      <div className="my-6">
        <div className="w-[17rem]  font-bold  border-[1px] px-4">
          <div className="w-full text-white my-3 py-2 bg-green-700">
            <h2 className="text-center  text-xl">Cart Totals</h2>
          </div>
          <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
              </div>
              
                <hr />
              
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
              <p>Total</p>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
              <hr />
            </div>

            <button className="my-4 px-1.5rem py-2 bg-green-500 text-white hover:bg-green-600">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart