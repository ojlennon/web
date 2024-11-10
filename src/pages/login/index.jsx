import { supabase } from "@/lib/supabase"
import { redirect } from "next/dist/server/api-utils"
export default function Login() {
    const signIn = async () => {
        // 'use server'
        const origin = headers;
        const { error, data } = await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `/auth/callback`
            }
        })
        if (error) {
            console.log(error)
        } else {
            return redirect(data.url)
        }


}

    return (
        <form>
            <button onClick={signIn}>Github</button>
        </form>
    )
}