import { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
export default function EditPosts() {
    const [post, setPost] = useState([]);
    const { slug } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => (post ? setPost(post) : null));
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}
