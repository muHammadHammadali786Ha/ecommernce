// import React from 'react'
import './Subscribe.css';
const Subscribe = () => {
  return (
    <div className=" md:w-[full] flex flex-wrap md:flex-nowrap items-center gap[4rem] justify-between bg-gray-900 h-[28rem] mx-[1rem] md:mx-[6rem] my-[4rem] relative">
            <div className="hidden md:block absolute bottom-0">
                <img src="src\images\partner-left-bg.png" alt="" />
            </div>
            <div className="center absolute left-[3rem] sm:left-[35%] mr-[7rem] sm:mr-[5rem] flex flex-col gap-4">
                <p className='text-center text-green-500 text-[0.9rem] sm:text-[1.3rem] font-semibold'>-- Subscribe Newsletter --</p>
                <p className='text-white text-xl sm:text-2xl font-bold'>Sign Up To Newsletter & Get <b className='text-green-500'>20% Off.</b></p>
                <div className=' px-[2rem] bg-white flex gap-4 md:gap-12 justify-around rounded-full py-2'>
                    <input className='border-none py-1 md:py-3 ' type="email" name='email' placeholder='Enter your Email'/>
                    <button className='px-[1rem] md:px-[1.5rem] py-1 md:py-4 bg-green-600 rounded-full text-white md:font-semibold'> Sign Up</button>
                </div>
            </div>
            <div className="hidden md:block right absolute right-0 top-0">
            <img src="src\images\partner-right-bg.png" alt="" />
            </div>
    </div>
  )
}

export default Subscribe