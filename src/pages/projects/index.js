import Router from "next/router";
import PostList from "@/components/PostList";
import Post from "@/components/Post";
import { TopBar } from "@/components/TopBar";

export default function Projects() {
  return (
    <div>
      <TopBar />
      <PostList />
    </div>
  );
}
