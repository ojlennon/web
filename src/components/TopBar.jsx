"use client";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

export function TopBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user); // Set the user state if logged in
    };

    getUser();
  }, []);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) setUser(null); // Reset user state on sign-out
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "#b4d",
          gap: 3,
          p: 2,
          borderRadius: 1,
        }}
      >
        <Image
          src="/michigan.png"
          alt="Michigan Logo"
          width={50}
          height={50}
          quality={100}
        />
        <Link href="/" color="inherit" underline="hover">
          Home
        </Link>
        About
        <Link href="/projects" color="inherit" underline="hover">
          Projects
        </Link>
        <Link href="/about" color="inherit" underline="hover"></Link>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "#cab",
          gap: 2,
          p: 2,
          borderRadius: 1,
        }}
      >
        {user ? (
          <Button variant="text" onClick={signOut}>
            Sign Out
          </Button>
        ) : (
          <>
            <Link href="/login" color="inherit" underline="hover">
              Login
            </Link>
            <Link href="/signup" color="inherit" underline="hover">
              Sign Up
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
}
