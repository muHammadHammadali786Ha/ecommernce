/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {  useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
// import { brand } from '../../assets/assets';

const Update = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    console.log(id);
   
    const [image ,setImage] = useState(false);
    // const [imageget ,setImageget] = useState(brand.upload);
  
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad",
        image:""
    })
    // const imageChangeHandler=(e)=>{
    //     setImage(e.target.files[0])
    //     // data.image=image;
    // }
    const onChangeHandler = (e) =>{
            
                setData({...data,[e.target.name]:e.target.value})
            // setData(data=>({...data,[name]:value}));
    }

  
    const onSubmitHandler = async () =>{
        console.log("working now");
        const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image",image);
    console.log(formData);
    
    console.log(formData);
        // e.preventDefault();
        const response = await axios.post(`http://127.0.0.1:8000/api/UpdateProduct/${id}`, formData);
        console.log(response); // Log response for debugging
        if (response.statusText ==="OK") {
            setData({
                name: "",
                description: "",
                price: "",
                category: "",
                image: ""
            });
            // setImage(null);
            navigate("/admin/list")
            toast.success(response.data.message);
            // console.log("Ok");
        }
        else{
            toast.error(response.data.message);
        }

    }

    

    const getSingleItem = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/productItem/${id}`);
            console.log(response.data);
            if (response.data) {
                setData({
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    category: response.data.category,
                    image:response.data.image
                });
                // setImageget(true);
                // setImage(response.data.image);
                // console.log(imageget);
            }
        } catch (error) {
            toast.error("An error occurred while fetching the product data.");
        }
    };

    useEffect(() => {
        getSingleItem();
    }, [id]);
    return (
        <div>
            <div className="add">
                <form className='flex flex-col gap-4    ' >
                    <div className="add-img-upload flex-col">
                        <p className='font-bold mb-3'>Upload Image</p>
                        <label htmlFor="image">
                        {/* <img src={`${url}/storage/products/`+item.image} alt="" /> */}
                            <img src={image?URL.createObjectURL(image):"http://127.0.0.1:8000/storage/products/"+data.image} alt="" className='w-[10rem]'/>
                        </label>
                        <input  onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
                    </div>

                    <div className="add-product-name flex-col">
                        <p className='font-bold mb-3'>Proudct name</p>
                        <input onChange={onChangeHandler} name='name'  value={data.name} type="text" placeholder='Type here' className='border-[1px] px-[1.5rem] py-3'  />
                    </div>

                    <div className="add-product-description flex-col">
                        <p className='font-bold mb-3'>Products description</p>
                        <textarea onChange={onChangeHandler} name="description" value={data.description}  id="" rows="6" placeholder='Write content here' className='border-[1px] px-[1.5rem] py-3'></textarea>
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

export default Update;