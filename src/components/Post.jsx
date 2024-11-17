import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Divider } from "@mui/material";

export default function Post(props) {
  const [author, setAuthor] = useState(null);
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
  },[]);

  return (
    <div style={{ background: "#A9A9A9", borderRadius: "1%", padding:"3px", width:"250px" }}>
      <div style={{ display: "flex", justifyContent:"space-between"}}>
        <h1>
          <b>{props.title}</b>
        </h1>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          height: "50px",
        }}
      >
        {/* <img
            src={props.creator.image}
            
          /> */}
        {/* Conditionally render the author's first name only when data is loaded */}
        {author ? (
          <p>
            <a href={`mailto:${author["email"]}`} target="_blank">{author["first_name"]}</a>
            </p> // Display the first name once author data is loaded
        ) : (
          <p>Loading author...</p> // Display a loading message until author data is available
        )}
      </div>
    </div>
  );
}
