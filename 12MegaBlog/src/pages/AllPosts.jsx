import { useEffect, useState } from "react";
import service from "../appwrite/config";
import { PostCard, Container } from "../components";
export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service
            .getPosts([])
            .then((posts) => (posts ? setPosts(posts.documents) : null));
    }, []);
    return (
        <div className="py-8 w-full">
            <Container>
                <div className="flex flex-wrap gap-3">
                    {posts.map((post) => {
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard post={post} />;
                        </div>;
                    })}
                </div>
            </Container>
        </div>
    );
}
