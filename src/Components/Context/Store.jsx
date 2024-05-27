/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";

import React from 'react'
import { topProduct } from "../../assets/assets";
import { json } from "react-router-dom";
export const StoreContext = createContext(null);

const StoreProvider = (props) => {
    
    const [loginUser, setLoginUser] = useState(false);
    const [loginNow, setLoginNow] = useState();

    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem("carte");
        return savedCount ? JSON.parse(savedCount) : {};
    });

    const [totalItems ,setTotalItems] = useState(0);

    let total = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getTotal = ()=> {
        const data = localStorage.getItem("carte");
        let con = JSON.parse(data);
        console.log("ok",con);
        for ( const i in con){
            total +=parseInt(count[i])
        }
        console.log(total);
        setTotalItems(total);
    }

    const addCount = (id) =>{
        setTotalItems(totalItems+1)
        if (!count[id]) {
            setCount((prev)=>({...prev,[id]:1}))
            console.log(count);
            
        }
        else{
            setCount((prev)=>({...prev,[id]:prev[id]+1}))
            console.log(count);
        
        }
        
        // localStorage.removeItem("carte")
        // localStorage.setItem("carte",JSON.stringify(count))
    }

    const removeCount = (id) =>{
        setCount((prev)=>({...prev,[id]:prev[id]-1}))
        localStorage.setItem("carte",JSON.stringify(count));
        getTotal();
    }

    
    const getTotalCartAmount = () => {
        
        let totalAmount = 0;
        // let total
        for(const item in count){

            if (count[item] > 0) {   
                let itemInfo = topProduct.find((product)=>product.id == item)
                console.log(itemInfo);
                totalAmount += itemInfo.price * count[item] 
            }
        }
        return totalAmount;
    }
    const miniStore = {
        count,setCount,
        addCount,
        totalItems,
        getTotalCartAmount,
        loginUser,
        setLoginUser,
        loginNow,
        setLoginNow,
        removeCount,
    }

    useEffect(()=>{
        
        localStorage.setItem("carte",JSON.stringify(count));
        getTotal();
        
    },[count,getTotal]);
  return (
    <StoreContext.Provider value={miniStore}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;