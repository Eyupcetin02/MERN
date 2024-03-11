import React, { useEffect, useState } from 'react';

const UseToken = () => {
    const [token , setToken] = useState("")
    useEffect(()=>{
        setToken(JSON.parse(localStorage.getItem("auth")))

    },[])
    return [token]
}

export default UseToken;
