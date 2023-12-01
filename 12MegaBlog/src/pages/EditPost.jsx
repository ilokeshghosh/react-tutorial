import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { setPosts } from "../store/postSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function EditPost() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const localPosts = localStorage.getItem("posts");
    try {
      if (localPosts) {
        const parsedPosts = JSON.parse(localPosts);
        dispatch(setPosts(parsedPosts));
      }
    } catch (error) {
      console.log("error is ::", error);
    }
  }, []);

  useEffect(() => {
    if (slug) {
      const currentPost = posts.find((post) => post.$id === slug);
      setPost(currentPost);
    } else {
      navigate("/");
    }
  }, [slug, navigate, posts]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
