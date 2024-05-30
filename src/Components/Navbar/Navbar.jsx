/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, NavLink, Navigate, NavigationType } from 'react-router-dom'
import { brand } from '../../assets/assets'

// logo 
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from 'react-icons/fa';
import { StoreContext } from '../Context/Store';
import { RiDropdownList } from 'react-icons/ri';

const Navbar = () => {
  const [navCall ,setNavCall] = useState(false);
  const { totalItems, loginUser } = useContext(StoreContext);

  const [searchShow, setSearchShow] = useState(false);
  const changeState = () => {
    setSearchShow(!searchShow);
  }
  return (
    <>
    <div className='flex justify-between items-center  py-[1rem] mx-[1.2rem] md:mx-[3rem] relative'>
      <div className="logo">
        {/* <img src={brand.logo} alt="" width="80px"/> */}
        <p className='text-3xl font-bold'>Organ<span className='text-green-600'>ica</span></p>
      </div>

      <div className="hidden lg:flex gap-8 text-[1.1rem] font-bold">
        <Link to="/" className='hover:text-green-800' >Home</Link>
        <Link to="/" className='hover:text-green-800' >About</Link>
        <Link to="/product" className='hover:text-green-800' >Product</Link>
        <Link to="/contact" className='hover:text-green-800' >Contact</Link>
        <Link to="/admin" className='hover:text-green-800' >Admin</Link>
      </div>

      {!loginUser ?
        <div className='hidden lg:block'> <Link to="/reg"> <button className=' rounded-full text-white font-semibold  bg-slate-500 py-2 px-[1.6rem]'>Sign In</button> </Link> </div> :
        <div className="hidden lg:block">

          <div className='flex gap-3 items-center justify-center'>
            <div className='w-[3.5rem] h-[3.5rem] bg-slate-100 flex justify-center rounded-full  hover:border-[0.15rem] hover:border-green-500' onClick={changeState}>
              <img className='w-[1.2rem]' src={brand.search} alt="" />
            </div>
            <div className='w-[3.5rem] h-[3.5rem] bg-slate-100 flex items-center justify-center rounded-full hover:border-[0.15rem] hover:border-green-500'>
              🤍
              {/* 🤍 */}
            </div>
            <Link to="/cart">
              <div className='w-[3.5rem] h-[3.5rem] bg-slate-100 flex justify-center rounded-full hover:border-[0.15rem] hover:border-green-500 relative'>
                <img className='w-[1.2rem]' src={brand.bag} alt="" />
                <div className='absolute right-2 top-2 flex items-center justify-center bg-green-600 w-4 h-4 rounded-full'>
                  <p className='text-white text-[0.7rem] font-semibold'>{totalItems}</p>
                </div>
              </div>
            </Link>
            <div>
              
               
            </div>
          </div>
          <div></div>
          <div></div>
          {/* <button className='border px-[1.5rem] py-2 rounded-full font-semibold hover:bg-slate-700'>Sign In</button> */}
        </div>}


      {/* Search Box  */}
      {
        searchShow &&
        <div className="absolute right-12 top-20 z-10 ">
          <input className='border-none py-3 px-[1rem] bg-slate-100 shadow-md text-gray-600' type="search" name="search" id="" placeholder='Search Here' />
        </div>
      }

      <div className='lg:hidden flex flex-col gap-2 ' onClick={()=>setNavCall(!navCall)}>
        <div className='h-1 w-9 bg-gray-700'></div>
        <div className='h-1 w-9 bg-gray-700'></div>
        <div className='h-1 w-9 bg-gray-700'></div>
      </div>



    </div>
    {
      navCall&&
      <div className="w-full flex justify-center items-center md:hidden bg-[#fff] z-10">
        <div className="flex flex-col justify-center items-center gap-8 text-[1.1rem] font-bold">
          <Link to="/" className='hover:text-green-800' >Home</Link>
          <Link to="/" className='hover:text-green-800' >About</Link>
          <Link to="/" className='hover:text-green-800' >Product</Link>
          <Link to="/contact" className='hover:text-green-800' >Contact</Link>
        </div>
      </div>
      }

    </>
  )
}

export default Navbar