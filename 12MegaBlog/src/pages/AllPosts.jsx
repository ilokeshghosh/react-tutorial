import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector,useDispatch } from "react-redux";
import { setPosts } from "../store/postSlice";

function AllPosts() {
  const posts = useSelector(state=>state.post.posts)
  const dispatch = useDispatch();

  // useEffect(() => {}, []);
  // appwriteService.getPosts([]).then((posts) => {
  //   if (posts) {
  //     setPosts(posts.documents);
  //   }
  // });

  useEffect(()=>{
    const localPost = localStorage.getItem('posts');
    dispatch(setPosts(JSON.parse(localPost)))
  },[])

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
