import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Post(props) {
  const [author, setAuthor] = useState(null);
  // console.log(props.author_id);
  useEffect(() => {
    const retrieve_user = async () => {
      const { data, error } = await supabase.from('UserData')
      .select('*')
        .eq("user_id", props.author_id);
      
        if (error) {
          console.log(error);
        } else {
          if (data) {
            setAuthor(data[0]);
            console.log(data[0])
          } else {
            console.log(data)
          }
        }
    };
    retrieve_user();
  });

  return (
    <div style={{ background: "#A9A9A9", borderRadius: "1%" }}>
      <div style={{}}>
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
        <p>{author["first_name"]}</p>
      </div>
    </div>
  );
}
