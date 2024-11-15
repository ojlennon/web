import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/router";
import { TopBar } from "@/components/TopBar";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  async function signUpNewUser(event) {
    event.preventDefault();

    // Create user with email and password
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Error signing up:", error.message);
      return;
    }

    console.log("Sign up successful:", data);

    // If sign up is successful, insert first and last name into the UserData table
    const { error: userError } = await supabase
      .from("UserData")
      .insert([
        {
          user_id: data.user.id,
          first_name: firstName,
          last_name: lastName,
          email: email
        },
      ]);

    if (userError) {
      console.error("Error adding user data:", userError.message);
    } else {
      console.log("User data added successfully.");
      router.push("/")
    }

  }

  return (
    <div className="flex">
      <TopBar/>
      <form onSubmit={signUpNewUser}>
        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
