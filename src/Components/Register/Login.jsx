// import React from 'react'
import axios from "axios";
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/Store";

const Login = () => {
    const {setLoginUser} = useContext(StoreContext);
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
        // formData.append("name",data.name)
        formData.append("email",data.email)
        formData.append("password",data.password)
        const res = await axios.post('http://127.0.0.1:8000/api/login/',formData);
        console.log(res.data);
        if (res.data) {
            setLoginUser(res.data.email);
            // setLoginNow(res.data.email);
            navigator('/');
        }
    }
    return (
        <div>
            <div className="w-[80%] py-[1rem]  mx-auto flex flex-col justify-center items-center gap-5">
                <div >
                </div>
                <div className="w-[35rem] shadow-lg rounded-lg p-[3rem] flex flex-col gap-7">
                    <h1 className="text-4xl text-green-900 font-bold">Login Now</h1>

                    {/* <input type="text" className="px-[1.5rem] py-3 border-[1px]" name="name" value={data.name} placeholder="Enter your Name" onChange={InputHandler}/> */}
                    <input type="email" value={data.email} className="px-[1.5rem] py-3 border-[1px] rounded-md shadow-sm" name="email" placeholder="Enter your Email" onChange={InputHandler}/>
                    <input type="password" value={data.password} className="px-[1.5rem] py-3 border-[1px] rounded-md shadow-sm" name="password" placeholder="Enter your Password" onChange={InputHandler}/>

                    <button onClick={submitHandler} className="bg-green-600 py-2 text-white text-xl">Submit Now</button>
                    <p> if you have no account then first  <Link to="/reg" className="text-blue-400 font-semibold">Create Account</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login