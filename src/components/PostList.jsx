// import { supabase } from "@/lib/supabase";
// import Post from "../components/Post";
// import { useEffect, useState } from "react";

// export default function PostList() {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [user_data, setUserData] = useState({});

//   useEffect(() => {
//     supabase.auth.getUser().then((data, error) => setUserData(data))
//     .then(console.log(user_data.user))
//   },[]);

//   useEffect(() => {
//     fetch("/api/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data);
//         setLoading(false);
//         console.log(data);
//       });
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (!posts) return <p>No post data</p>;
//   if (!user_data || !user_data.user) {
//     // console.log("userdata" + !user_data)
//     // console.log("user" + !user_data.user)
//     return <p>No User!</p>
//   }

//   return (
//     <div style={{ width: "25%", padding: "10px" }}>
//       {posts.map((post, i) => (
//         <div key={"Post_" + i} className="mb-5">
//           <Post title={post.title} text={post.text} creator={post.creator} />
//         </div>
//       ))}
//     </div>
//   );
// }

import { supabase } from "@/lib/supabase";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import user_data from "@/lib/user";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [user_data, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUserData(data.user); // Assign data to user_data state
        // console.log("User data:", data);
      }
    };

    fetchUser();
  }, []);

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        width: "70%",
        padding: "10px",
        background: "red",
      }}
    >
      {posts.map((post, i) => (
        <div key={"Post_" + i} className="mb-5 ms-5">
          <Post
            title={post.title}
            text={post.text}
            author_id={post.author_id}
            post={post}
          />
        </div>
      ))}
    </div>
  );
}
