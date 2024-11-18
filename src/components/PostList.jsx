import { supabase } from "@/lib/supabase";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import user_data from "@/lib/user";
import { Box } from "@mui/material";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const [user_data, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data, error } = await supabase.auth.getUser();
  //     if (error) {
  //       // console.error("Error fetching user:", error);
  //     } else {
  //       setUserData(data.user); // Assign data to user_data state
  //       // console.log("User data:", data);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
        console.log("Posts:", data);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!posts) return <p>No post data</p>;
  if (!user_data) {
    return <p>No User!</p>;
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", flexWrap:"wrap" }}
    >
      {posts.map((post, i) => (
        <div key={"Post_" + i} className="mb-5 ms-2">
          <Post
            title={post.title}
            text={post.text}
            author_id={post.author_id}
            post={post}
          />
        </div>
      ))}
    </Box>
  );
}
