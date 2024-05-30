// import React from 'react'
// import { useState } from 'react-router-dom'
import axios from 'axios';
// import { assets } from '../../../assets/assets'
// import './Add.css'
import {  useState } from 'react'
import { toast } from 'react-toastify';
import { brand } from '../../assets/assets';

const Add = () => {
    // const url = "";
    const [image ,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler = (e) =>{
            const name = e.target.name;
            const value= e.target.value;

            setData(data=>({...data,[name]:value}));
    }

    // useEffect(()=>{
    //     console.table(data);
    // },[data])

    const onSubmitHandler = async () =>{
        console.log("working now");
        // e.preventDefault();
        const  formData = new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",data.price);
        formData.append("category",data.category);
        formData.append("image",image);
        
        const response = await axios.post("http://127.0.0.1:8000/api/product/",formData);
        // console.log(JSON.parse(response));
        console.log(response);
        if (response) {
            console.log(response.data.success);
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false);
            toast.success(response.data.message);

            // console.log("Ok");
        }
        else{
            toast.error(response.data.message);
        }

    }
    return (
        <div>
            <div className="add">
                <form className='flex flex-col gap-4    ' >
                    <div className="add-img-upload flex-col">
                        <p className='font-bold mb-3'>Upload Image</p>
                        <label htmlFor="image">
                            <img src={image?URL.createObjectURL(image):brand.upload} alt="" className='w-[10rem]'/>
                        </label>
                        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
                    </div>

                    <div className="add-product-name flex-col">
                        <p className='font-bold mb-3'>Proudct name</p>
                        <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' className='border-[1px] px-[1.5rem] py-3'  />
                    </div>

                    <div className="add-product-description flex-col">
                        <p className='font-bold mb-3'>Products description</p>
                        <textarea onChange={onChangeHandler} value={data.description} name="description" id="" rows="6" placeholder='Write content here' className='border-[1px] px-[1.5rem] py-3'></textarea>
                    </div>

                    <div className="add-category-price flex gap-3">
                        <div className="add-category flex flex-col">
                            <p className='font-bold mb-3'>Prodcts category</p>
                            <select onChange={onChangeHandler} name="category" id="" className='px-[1.5rem]  py-3 w-[12rem]'>
                                <option value="Salad">Salad</option>
                                <option value="Rolls">Rolls</option>
                                <option value="Deserts">Deserts</option>
                                <option value="Sandwich">Sandwich</option>
                                <option value="Cake">Cake</option>
                                <option value="Pure">Pure Veg</option>
                                <option value="Pasta">Pasta</option>
                                <option value="Noodles">Noodles</option>
                            </select>
                        </div>

                        <div className="add-price flex flex-col">

                            <p className='font-bold mb-3'>Prodct price</p>
                            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='$20' className='border-[1px] px-[1.5rem] py-2 w-[12rem]'/>
                        </div>

                    </div>
                    <button type='button' onClick={onSubmitHandler} className='w-[7rem] bg-green-500 py-2 rounded-md' >ADD</button>
                </form>
            </div>
        </div>
    )
}

export default Add