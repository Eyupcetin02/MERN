import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeCart from "../components/HomeCart"
import axios from "axios"
import { getPostsAction } from '../redux/actions/post';
const Home =  () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.posts);
    const {filter} = useSelector(state => state.filter)
    
       useEffect(() => {
        const fetchData = async () => {
          try {
            await dispatch(getPostsAction());
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();         
      }, [dispatch]);
      
      const filterPost =  posts.filter(data => data.title.toLowerCase().includes(filter.toLowerCase()))
      
    return (
        <div className='flex items-center m-5 flex-wrap '>
            {posts && filterPost?.map((post , i) =>(
                <HomeCart key={i} post={post}/>
            ))}
        </div>
    );
}

export default Home;
