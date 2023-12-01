import React, {useEffect, useState,useId} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { setPosts } from '../store/postSlice';
import { useSelector,useDispatch } from 'react-redux';
// import { useSelector } from "react-redux";

function Home() {
    // const [posts, setPosts] = useState([])
    const dispatch = useDispatch();
    const Posts = useSelector(state=>state.post.posts)
    const status = useSelector(state=>state.auth.status)
    
    // console.log(Posts);
    // useEffect(() => {
    //     appwriteService.getPosts().then((posts) => {
    //         if (posts) {
    //             setPosts(posts.documents)
    //         }
    //     })
    // }, [])

    useEffect(()=>{
        appwriteService.getPosts().then(posts=>{
            if(posts){
                dispatch(setPosts(posts.documents))
                localStorage.setItem('posts',JSON.stringify(posts.documents))
            }
        });
    },[])
  
    if (Posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            {
                                status? ( <h1 className="text-2xl font-bold hover:text-gray-500">
                                No Post to read 
                            </h1>) :  ( <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read and write post
                            </h1>)
                            }
                           
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {Posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home