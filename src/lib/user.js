import { supabase } from "./supabase";
// import { useState, useEffect } from "react";
//   const [isLoading, setLoading] = useState(true);
//   const [user_data, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data, error } = await supabase.auth.getUser();
//       if (error) {
//         console.error("Error fetching user:", error);
//       } else {
//         setUserData(data.user); // Assign data to user_data state
//         // console.log("User data:", data);
//       }
//     };

//     fetchUser();
//   }, []);

// export default user_data;

const { data, error } = await supabase.auth.getUser();
const user_data = data.user;

console.log(user_data);

export default user_data;