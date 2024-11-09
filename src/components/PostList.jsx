import Post from "../components/Post";
import { useEffect, useState } from "react";


export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
      fetch("/api/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data) 
            setLoading(false);
            console.log(data);
        });
    }, []);
  
    if (isLoading) return <p>Loading...</p>
    if (!posts) return <p>No profile data</p>
  
    return (
      <div style={{ width: "25%", padding: "10px" }}>
        {posts.map((post, i) => (
          <div key={"Post_" + i} className="mb-5">
            <Post title={post.title} text={post.text} creator={post.creator} />
          </div>
        ))}
      </div>
    );
  }
  