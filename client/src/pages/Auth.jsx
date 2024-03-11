import React, { useState } from 'react';
import { loginAction, registerAction } from '../redux/actions/auth';
import {useDispatch} from "react-redux"

const Auth = () => {
    const [signUp , setSignUp] = useState(true)
    const [authData , setAuthData] = useState({username:"" , email:"" , password:""})
    const dispatch = useDispatch()
    const onChangeFunc = (e)=>{
setAuthData({...authData , [e.target.name] : e.target.value})
console.log(typeof(authData));
    }
    const authFunction = ()=>{
        if(signUp){
           dispatch(registerAction(authData))
        }else{
            dispatch(loginAction(authData))
        }
    }
    return (
        <div className='w-full h-screen bg-gray-400 flex items-center justify-center fixed top-0 bottom-0 right-0 left-0 z-50'>
            <div className='w-1/3 bg-white p-3'>
                <h1 className='text-2xl text-indigo-700 font-bold'>{signUp ? "SIGN UP" : "LOG IN"}</h1>
                <div className='flex flex-col space-y-3 my-5'>
                    {signUp && <input value={authData.username} name='username' onChange={onChangeFunc} type="text" placeholder='UserName' className='border p-2 rounded-md outline-none'/>}
                    <input value={authData.email} name='email' onChange={onChangeFunc} type="text" placeholder='Email' className='border p-2 rounded-md outline-none'/>
                    <input value={authData.password} name='password' onChange={onChangeFunc} type="text" placeholder='Password' className='border p-2 rounded-md outline-none'/>
                </div>
                <div className='text-red-500 text-xs cursor-pointer mb-4'>

                    {
                        signUp ? <span onClick={()=>setSignUp(!signUp) }>Giriş Yap</span> : <span onClick={()=>setSignUp(!signUp) }>Kayıt Ol</span>
                    }
                </div>
                <div onClick={authFunction} className='cursor-pointer hover:bg-teal-600 w-full p-2 text-center bg-teal-400 text-white rounded-md'>{signUp ?"Kayıt Ol": "Giriş Yap"}</div>
            </div>
        </div>
    );
}

export default Auth;




