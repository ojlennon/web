import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AddPostForm() {
  const [user_data, setUserData] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUserData(data.user); // Assign data to user_data state
        // console.log("User data:", data.user);
      }
    };

    fetchUser();
  }, []);

  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const formValues = Object.fromEntries(form_data.entries()); // Convert to object

    console.log(formValues);
    setFormData(formValues); // Set state or perform any other actions

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
  };

  return (
    <div>
      {user_data ? (
        <div>
          <h1>
            <b>Add Post</b>
          </h1>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" required />
            </label>
            <label>
              Text:
              <input type="text" name="text" required />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
