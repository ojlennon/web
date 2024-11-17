"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, use, Suspense } from "react";
import { TopBar } from "@/components/TopBar";
import PostList from "@/components/PostList";
import Login from "@/components/LoginForm";
import LoginPage from "@/pages/login";
import AddPostForm from "@/components/AddPostForm";
import { Box } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <TopBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "#D3D3D3",
        }}
      >
        <PostList />
        <AddPostForm />
      </Box>

      {/* <div id="aboutUs">
        <h1 id="aboutTitle">About</h1>
        <p>
          Our idea is not unique. Well, only if you think broadly. If you are
          looking for qualified people, you use LinkedIn...
        </p>
      </div>

      <div id="footnote">
        <a href="">FAQ</a>
        <a href="">Contact Us</a>
        <a href="">Founders</a>
      </div> */}
    </Box>
  );
}
