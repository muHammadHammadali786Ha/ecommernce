/* eslint-disable no-unused-vars */
// import React from 'react'

import { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const List = () => {
  const [list, setList] = useState([]);
  const url = "http://localhost:8000"
  const fetchList = async () => {
    const response = await axios.get("http://localhost:8000/api/show");
    console.log(response.data);
    if (response.data) {
      console.log(response.data.data);
      setList(response.data);
    }
    else {
      toast.error("Error");
    }
  }

  const removed = async (foodID) =>{
    
    console.log(foodID);
    const data = {
        id:foodID
    }
    const response = await axios.delete(`http://localhost:8000/api/delete/`+foodID);
    await fetchList();
    if (response.data) {
      toast.success(response.data)
    }
    else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">

        <div className="list-table-format title grid grid-cols-6">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Update</b>
          <b>Delete</b>
        </div>
        {
          list.map((item,index)=>{
            return(
              <div key={index} className="list-table-format grid grid-cols-6 gap-2">
                  <img src={`${url}/storage/products/`+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                 <Link to={`/update/${item.id}`}>
                  <button className='text-xl px-[0.5rem] py-2 bg-green-300 hover:bg-green-700 text-white' >Edit</button>
                 </Link> 
                  <button className='text-xl cursor px-[0.6rem] py-2 bg-red-300 hover:bg-red-700 text-white' onClick={()=>removed(item.id)}>X</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List