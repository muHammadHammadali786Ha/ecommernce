/* eslint-disable no-unused-vars */
// import React from 'react'

import { useParams } from "react-router-dom"
import { topProduct } from "../../assets/assets";

const Detail = () => {
    const id = useParams();
    console.log(id);

    const list = topProduct.filter((i)=> i.id == parseInt(id))    
    console.log(list);
  return (
    <div className="grid grid-cols-2 w-full">
       
    </div>
  )
}

export default Detail