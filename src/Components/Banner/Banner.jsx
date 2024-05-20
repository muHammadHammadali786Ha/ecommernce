// import React from 'react'
import { brand } from '../../assets/assets';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner w-full bg-green-600 h-[16rem] flex justify-center item-center gap-[7rem]">
            <div className="flex items-center gap-3">
                <div className='div w-[5rem] bg-brown-200 h-[5rem] flex items-center justify-center rounded-full'>
                <img src={brand.truck} alt="" width="40rem" />
                </div>
                <p className='text-2xl text-white font-bold'>Free Shipping</p>
            </div>

            <div className='flex items-center gap-3'>
                <div className='div w-[5rem] bg-brown-200 h-[5rem] flex items-center justify-center rounded-full'>
                <img src={brand.money} alt="" width="40rem" />
                </div>
                <p className='text-2xl text-white font-bold'>Safe Payment</p>
            </div>

            <div className='flex items-center gap-3'>
                <div className='div w-[5rem] bg-brown-200 h-[5rem] flex items-center justify-center rounded-full'>
                <img src={brand.headphones} alt="" width="40rem" />
                </div>
                <p className='text-2xl text-white font-bold'>24/7 Support</p>
            </div>
        </div>
    )
}

export default Banner