// import React from 'react'

import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigator = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const InputHandler = (e) =>{
        setData({...data,[e.target.name]:e.target.value});
    } 

    const submitHandler = async() =>{

        // http://127.0.0.1:8000/
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("email",data.email)
        formData.append("password",data.password)
        const res = await axios.post('http://127.0.0.1:8000/api/register/',formData);
        console.log(res);
        if (res.status == 201) {
            navigator('/login');
        }
    }
    return (
        <div>
            <div className="w-[80%] py-[1rem] bg-[#fff] shadow-md mx-auto flex flex-col justify-center items-center gap-5">
                <div >
                    <h1 className="text-4xl text-gray-600 font-bold">Register Now</h1>
                </div>
                <div className="w-[45rem] flex flex-col gap-7">

                    <input type="text" className="px-[1.5rem] py-3 border-[1px]" name="name" value={data.name} placeholder="Enter your Name" onChange={InputHandler}/>
                    <input type="email" value={data.email} className="px-[1.5rem] py-3 border-[1px]" name="email" placeholder="Enter your Email" onChange={InputHandler}/>
                    <input type="password" value={data.password} className="px-[1.5rem] py-3 border-[1px]" name="password" placeholder="Enter your Password" onChange={InputHandler}/>

                    <button onClick={submitHandler} className="bg-green-600 py-2 text-white text-xl">Submit Now</button>
                    <p>You have already Account <Link to="/login" className="text-blue-400">Login</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Register