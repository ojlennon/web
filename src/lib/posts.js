import { supabase } from "./supabase";

const posts_list = fetch("/api/posts")
    .then((res) => res.json());