import { TopBar } from "@/components/TopBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const retrievePost = async () => {
      const { data, error } = await supabase
        .from("Posts")
        .select("*")
          .eq("id", id);
        
        if (error) {
            
        } else {
            console.log(data);
            setPost(data);
        }
    };
      retrievePost();
  }, []);
    return <>
      <TopBar />
      <Box>
        
      </Box>
    </>;
}
