import React from 'react';
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import {getPostsAction} from '../redux/actions/post'
const Navbar = () => {
    const dispatch = useDispatch()
    const tokenFunction =()=>{
        localStorage.clear()
        window.location = "/auth"
    }
    const openModal = ()=>{
        dispatch({type:"MODAL" , payload: true})
    }

    return (
        <div className='h-20 w-full bg-teal-500 flex items-center justify-between px-5'>
            <div className='text-white font-bold text-2xl cursor-pointer'>MEDIUM</div>
            <div className='flex items-center space-x-5'>
                <input onChange={(e)=>{dispatch({type:"FILTER_POST" , payload:e.target.value})}}  type="text" placeholder='Ara' className='p-1 outline-none rounded-md' />
                <div onClick={openModal} className='w-36 border p-1 rounded-md text-center text-white cursor-pointer hover:bg-teal-800'>Post Oluştur</div>
                <BiLogOut onClick={tokenFunction} size={25} className='text-white cursor-pointer'/>
            </div>
        </div>
    );
}

export default Navbar;
