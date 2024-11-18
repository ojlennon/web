import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { TextField, Button, Box } from "@mui/material";
import user_data from "@/lib/user";
export default function AddPostForm() {
  // const [user_data, setUserData] = useState(null);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data, error } = await supabase.auth.getUser();
  //     if (error) {
  //       // console.error("Error fetching user:", error);
  //     } else {
  //       setUserData(data.user); // Assign data to user_data state
  //       // console.log("User data:", data.user);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const formValues = Object.fromEntries(form_data.entries()); // Convert to object

    const { data, error } = await supabase
      .from("Posts")
      .insert([
        {
          title: formValues.title,
          text: formValues.text,
          author_id: user_data.id,
        },
      ])
      .select();
    location.reload();
  };

  return (
    <div>
      {user_data ? (
        <div className="flex-col justify-items-center">
          <h1>
            <b>Add Post</b>
          </h1>

          <form onSubmit={handleSubmit}>
            <Box className="my-2">
              <TextField
                label="Title"
                name="title"
                required
                variant="outlined"
                fullWidth
              />
            </Box>
            <TextField
              label="Text"
              name="text"
              required
              variant="outlined"
              fullWidth
              multiline
            />
            <Button type="submit" variant="contained" color="primary" className="mb-10">
              Submit
            </Button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
