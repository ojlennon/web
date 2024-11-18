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

  // return (
  //   <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
  //     <TopBar />
  //     <Box
  //       sx={{
  //         display: "flex",
  //         justifyContent: "center",
  //         flexDirection: "row",
  //         alignItems: "top",
  //         background: "#D3D3D3",
  //       }}
  //     >
  //       <PostList />
  //       <AddPostForm />
  //     </Box>
  //   </Box>
  // );
  return (
    <>
      <TopBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center the PostList horizontally
          alignItems: "flex-start", // Align items at the top of the container
          height: "100vh", // Full viewport height to center the content
          background: "purple", // Page background color
          padding: 2, // Optional padding
        }}
      >
        <Box
          sx={{
            width: "80%", // Adjust width of PostList box
            backgroundColor: "white", // Optional background for PostList area
            padding: 2,
            boxShadow: 2,
            borderRadius: 2,
            overflowY: "auto", // Allow scrolling if content overflows
            maxHeight: "80vh", // Restrict height for better layout
          }}
        >
          <PostList />
        </Box>
        <Box
          sx={{
            width: "30%", // Adjust width of AddPostForm box
            marginLeft: 4, // Space between PostList and AddPostForm
            backgroundColor: "white", // Optional background
            padding: 1,
            boxShadow: 2,
            borderRadius: 2,
            height: "fit-content", // Prevent stretching to full height
          }}
        >
          <AddPostForm />
        </Box>
      </Box>
    </>
  );
}
