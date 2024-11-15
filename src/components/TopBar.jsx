"use client";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

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
    <div
      style={{
        display: "flex",
        gap: "10px",
        background: "#255",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: "#b4d",
          gap: "20px",
        }}
      >
        <Image
          src="/michigan.png"
          alt="Michigan Logo"
          width={50}
          height={50}
          quality={100}
        />
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/about">About</Link>
        </p>
        <p>
          <Link href="/projects">Projects</Link>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          background: "#cab",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* <a href="mailto:owenjlennon@icloud.com">Email</a> */}
        <p>
          <a href="mailto:example@example.com" target="_blank">Contact Us</a>
        </p>
        {user ? (
          <button onClick={signOut}>Sign Out</button>
        ) : (
          <>
            <p>
              <Link href="/login">Login</Link>
            </p>
            <p>
              <Link href="/signup">Sign Up</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
