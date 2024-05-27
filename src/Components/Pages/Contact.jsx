// import React from 'react'

const Contact = () => {
    return (
        <div className="w-[80%] py-[1rem] bg-[#fff] shadow-md mx-auto flex flex-col justify-center items-center gap-5">
            <div >
                <h1 className="text-4xl text-gray-600 font-bold">Contact Us</h1>
            </div>
            <div className="w-full px-10 flex flex-col gap-7">
                <input type="text" className="px-4 py-3 border-[1px]"  name="name" placeholder="Enter your Name" />
                <input type="text" className="px-4 py-3 border-[1px]"  name="name" placeholder="Enter your Email" />
                <input type="text" className="px-4 py-3 border-[1px]"  name="name" placeholder="Enter your Phone Number" />
                <textarea type="text" className="px-[1.5rem] py-2 border-[1px]"  name="name" placeholder="Enter your Message" />
                <button className="bg-green-600 py-2 text-white text-xl">Submit Now</button>
            </div>
        </div>
    )
}

export default Contact