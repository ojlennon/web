"use client";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";

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
    <AppBar position="sticky" sx={{ backgroundColor: "#0096FF" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Image
            src="/michigan.png"
            alt="Michigan Logo"
            width={50}
            height={50}
            quality={100}
          />
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6">Home</Typography>
          </Link>
          <Link
            href="/projects"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="h6">Projects</Typography>
          </Link>
          <Link
            href="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="h6">About</Typography>
          </Link>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {user ? (
            <Button variant="text" color="white" onClick={signOut}>
              Sign Out
            </Button>
          ) : (
            <>
              <Link
                href="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="text" color="inherit">
                  Login
                </Button>
              </Link>
              <Link
                href="/signup"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button variant="text" color="inherit">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
