import { supabase } from "@/lib/supabase"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/router";
import { useState } from "react";
export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function signInWithEmail(event) {
        event.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) {
            console.error("Error logging in:", error.message);
          } else {
            console.log("Log in successful:", data);
            router.push("/")
          }
    }
    
    return(<div className="flex">
        <form onSubmit={signInWithEmail}>
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
      </div>)
      
}