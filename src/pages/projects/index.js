import Router from "next/router";
import PostList from "@/components/PostList";
import Post from "@/components/Post";
import Layout from "@/components/layout";
import { TopBar } from "@/components/TopBar";

export default function Projects() {
  return (
    <div>
      {/* <Layout>
        <PostList />
      </Layout> */}
          <TopBar />
          <PostList/>
    </div>
  );
}
