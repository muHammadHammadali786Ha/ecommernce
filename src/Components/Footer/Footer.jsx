/* eslint-disable no-unused-vars */
import React from 'react'
import Box1 from './box1'
import Box2 from './Box2'
import Box3 from './Box3'
import Box4 from './Box4'

const Footer = () => {
  return (
    <div className='px-[3rem] md:px-[6rem] grid md:grid-cols-2 lg:grid-cols-4 mt-[4rem] py-[4rem] bg-[#1e272e]  text-white gap-[3.5rem]'>
        <Box1/>
        <Box2/>
        <Box3/>
        <Box4/>
    </div>
  )
}

export default Footer