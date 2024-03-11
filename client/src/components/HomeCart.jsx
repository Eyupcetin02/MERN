import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import {GrUpdate} from "react-icons/gr"
import { useDispatch } from 'react-redux';
import { deletePostAction } from '../redux/actions/post';
import { toast } from "react-toastify"

const HomeCart = ({post}) => {
    const dispatch = useDispatch()
    const deletePost = (id)=>{
        dispatch(deletePostAction(id))
        
        toast("delete post", {
            position: "top-right",
            autoClose: 5000,
            });
    }

    const updatePost = (id)=>{
        dispatch({type:"MODAL" , payload:{open:true , updateId : id}})
    }
    return (
        <div className='bg-indigo-300 relative w-1/3 h-110 border p-3 rounded-md bg-gray-50 mx-5 my-5'>
            <div className='font-bold text-xl'>{post?.title}</div>   
            <div className='text-sm text-gray-700'>{post?.description}</div> 
            <div className='flex items-center justify-between mt-4'>
                <span className='text-xs text-gray-500'>{post?.user}</span>
                <span className='text-xs text-gray-500'>{(post?.date)?.substring(0,10 )}</span>
            </div>
            <div className='absolute top-0 right-0 flex items-center space-x-3'>
            <AiOutlineDelete onClick={()=>deletePost(post._id)} size={22} className='cursor-pointer'/>
            <GrUpdate onClick={()=>updatePost(post._id)} className='cursor-pointer'/>
            </div>
        </div>
    );
}

export default HomeCart;
