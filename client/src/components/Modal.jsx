import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction, updatePostAction } from '../redux/actions/post';
import { toast } from "react-toastify"


const Modal = () => {
    const [postData , setPostData] = useState({user:"" , title:"" , description:""})
    const dispatch = useDispatch()
    const {modal} = useSelector(state => state.modal)
    const changeFunction = (e)=>{
        setPostData({...postData , [e.target.name]:e.target.value})
    }
    const postCreate = ()=>{
        if(modal?.updateId){
            dispatch(updatePostAction(modal?.updateId ,postData))
            toast("update post", {
                position: "top-right",
                autoClose: 5000,
                });

        }else{
            dispatch(createPostAction(postData))
             toast("create post", {
                position: "top-right",
                autoClose: 5000,
                });
        }
        
        dispatch({type:"MODAL" , payload:false})
    }
    return (
        <div className='w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'>
            <div className='bg-white w-1/3 p-2 rounded-md'>
                <div  className='flex items-center justify-between'>
                <h1 className='font-bold text-xl'>{modal?.updateId ? "POST GÜNCELLE" : "POST PAYLAŞ"}</h1>

                    <AiOutlineClose onClick={()=>{dispatch({type:"MODAL" , payload:false})}} size={25} className='cursor-pointer'/>
                </div>
            <div className='flex flex-col my-4 space-y-3'>
                <input onChange={changeFunction} value={postData.user} name='user' className='border p-2 rounded-md outline-none' type="text" placeholder='User' />
                <input onChange={changeFunction} value={postData.title} name='title' className='border p-2 rounded-md outline-none' type="text" placeholder='Title'/>
                <input onChange={changeFunction} value={postData.description} name='description' className='border p-2 rounded-md outline-none'  type="text" placeholder='Description'/>
            </div>
            <div onClick={postCreate} className='w-full p-2 text-center bg-teal-500 text-white cursor-pointer hover:bg-teal-800'>{modal?.updateId ? "GÜNCELLE" : "Paylaş"}</div>
            </div>
        </div>
    );
}

export default Modal;
