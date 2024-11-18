// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { Button, Divider, Typography } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import user_data from "@/lib/user";

// export default function Post(props) {
// const [author, setAuthor] = useState(null);
// const post = props.post;
// // console.log(props.author_id);
// useEffect(() => {
//   const retrieve_user = async () => {
//     const { data, error } = await supabase
//       .from("UserData")
//       .select("*")
//       .eq("user_id", props.author_id);

//     if (error) {
//       console.log(error);
//     } else {
//       if (data) {
//         setAuthor(data[0]);
//         // console.log(data[0]);
//       } else {
//         console.log(data);
//       }
//     }
//   };
//   retrieve_user();
// }, []);

// async function removePost() {
//   const { error } = await supabase.from("Posts").delete().eq('id', post.id);
//   location.reload();
// }

//   return (
//     <div style={{ background: "#A9A9A9", padding:"3px", width:"250px", border: 1,
//       borderColor: "grey.300",
//       borderRadius: 2,
//       boxShadow: 2,}}>
//       <div style={{ display: "flex", justifyContent:"space-between"}}>
//         <h1>
//           <b>{props.title}</b>
//         </h1>
//         {user_data.id === props.author_id ? (
//            <Button onClick={removePost}>
//            <CloseIcon/>
//              </Button>
//         ):(<></>)}

//       </div>
//       <div>
//         <p>{props.text}</p>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           gap: "10px"
//         }}
//       >
//         {/* <img
//             src={props.creator.image}

//           /> */}
//         {/* Conditionally render the author's first name only when data is loaded */}
//         {author ? (
//           <p>
//             <a href={`mailto:${author["email"]}`} target="_blank">{author["first_name"]}</a>
//             </p> // Display the first name once author data is loaded
//         ) : (
//           <p>Loading author...</p> // Display a loading message until author data is available
//         )}
//       </div>
//     </div>
//   );
// }

import { Card, CardContent, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import user_data from "@/lib/user";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Post = (props) => {
  const [author, setAuthor] = useState(null);
  const post = props.post;
  // console.log(props.author_id);
  useEffect(() => {
    const retrieve_user = async () => {
      const { data, error } = await supabase
        .from("UserData")
        .select("*")
        .eq("user_id", props.author_id);

      if (error) {
        console.log(error);
      } else {
        if (data) {
          setAuthor(data[0]);
          // console.log(data[0]);
        } else {
          console.log(data);
        }
      }
    };
    retrieve_user();
  }, []);

  async function removePost() {
    const { error } = await supabase.from("Posts").delete().eq("id", post.id);
    location.reload();
  }
  return (
    <Card
      sx={{
        backgroundColor: "#A9A9A9",
        padding: "3px",
        width: "250px",
        border: 1,
        borderColor: "grey.300",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="h1" fontWeight="bold">
            {props.title}
          </Typography>
          {user_data.id === props.author_id && (
            <Button onClick={removePost}>
              <CloseIcon />
            </Button>
          )}
        </div>
        <Typography variant="body2" component="p">
          {props.text}
        </Typography>
        <div style={{ display: "flex", gap: "10px" }}>
          {author ? (
            <Typography variant="body2">
              <a
                href={`mailto:${author["email"]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {author["first_name"]}
              </a>
            </Typography>
          ) : (
            <Typography variant="body2">Loading author...</Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
